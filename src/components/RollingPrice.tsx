import React, { useEffect, useRef, useState } from 'react';

const H = 1.1; // digit height in em. Raise to 1.2 if the tops/bottoms of digits get clipped.

interface Props {
    value: string;      // e.g. "₹10,000"
    className?: string; // font, size and colour classes go here
    stagger?: number;   // ms delay between digits
}

export const RollingPrice: React.FC<Props> = ({ value, className = '', stagger = 70 }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [armed, setArmed] = useState(false);

    // Start rolling when the price scrolls into view
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setArmed(true);
                    io.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    let digitIndex = 0;

    return (
        <span ref={ref} role="img" aria-label={value} className={`inline-flex ${className}`}>
            {[...value].map((ch, i) => {
                if (!/\d/.test(ch)) {
                    return <span key={value.length - i} aria-hidden="true">{ch}</span>;
                }
                const n = digitIndex++;
                return (
                    <span
                        key={value.length - i}
                        aria-hidden="true"
                        className="inline-block overflow-hidden align-bottom"
                        style={{ height: `${H}em`, lineHeight: `${H}em` }}
                    >
                        <span
                            className="flex flex-col motion-reduce:!transition-none"
                            style={{
                                transform: `translateY(${armed ? -parseInt(ch, 10) * H : 0}em)`,
                                transition: `transform 1100ms cubic-bezier(.16,.9,.2,1) ${n * stagger}ms`,
                            }}
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => (
                                <span key={k} className="block text-center" style={{ height: `${H}em` }}>
                                    {k}
                                </span>
                            ))}
                        </span>
                    </span>
                );
            })}
        </span>
    );
};