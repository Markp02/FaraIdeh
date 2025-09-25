'use client';

import React from 'react';

type Props = {
  size?: number | string;
  className?: string;
  title?: string;
};

export default function GitHubIcon({ size = 40, className, title = 'GitHub icon' }: Props) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.603-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.003-.404c1.017 0 2.04.137 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.103.814 2.223 0 1.604-.014 2.896-.014 3.293 0 .318.218.694.825.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z"
      />
      <title>{title}</title>
    </svg>
  );
}
