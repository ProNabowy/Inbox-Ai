"use client";
import React from "react";

const getParentBackground = (button: HTMLButtonElement) => {
	const computedStyle = getComputedStyle(button);
	let bgColor = computedStyle.backgroundColor;

	const fallback = "rgba(0, 0, 0, 0.1)";

	try {
		const match = bgColor.match(/\d+/g);
		if (match && match.length >= 3) {
			const r = Math.max(0, parseInt(match[0]) - 30);
			const g = Math.max(0, parseInt(match[1]) - 30);
			const b = Math.max(0, parseInt(match[2]) - 30);
			const a = match[3] ? parseFloat(match[3]) : 0.3;

			return {
				bgColor: `rgba(${r}, ${g}, ${b}, 0.1)`,
			};
		}
	} catch (err) {
		console.warn("Error parsing background color:", err);
	}

	return { bgColor: fallback };
};

function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
	const button = event.currentTarget;
	const rect = button.getBoundingClientRect();

	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - rect.left - radius}px`;
	circle.style.top = `${event.clientY - rect.top - radius}px`;
	circle.classList.add("ripple");

	const { bgColor } = getParentBackground(button);

	circle.style.background = bgColor;

	const existingRipple = button.getElementsByClassName("ripple")[0];
	if (existingRipple) existingRipple.remove();

	button.appendChild(circle);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	disableRipple?: boolean;
	variant?: "primary" | "secondary" | "text";
}

export default function Button({
	children,
	disableRipple,
	variant,
	...props
}: ButtonProps) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) props.onClick(e);

		if (!disableRipple) createRipple(e);
	};

	if (variant === "text") {
		return (
			<button {...props} onClick={handleClick}>
				{children}
			</button>
		);
	}

	if (variant === "secondary") {
		return (
			<button
				{...props}
				className={`btn-secondary ${props.className || ""}`}
				onClick={handleClick}
			>
				<span className="relative z-10">{children}</span>
			</button>
		);
	}

	if (variant === "primary") {
		return (
			<button
				{...props}
				className={`bg-[linear-gradient(225deg,#ff0c00,#fd8925)] ${props.className || ""}`}
				onClick={handleClick}
			>
				{children}
			</button>
		);
	}

	return (
		<button {...props} onClick={handleClick}>
			{children}
		</button>
	);
}
