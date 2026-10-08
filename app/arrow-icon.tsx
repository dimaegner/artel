type ArrowIconProps = { direction?: 'left' | 'right' };

export default function ArrowIcon({ direction = 'right' }: ArrowIconProps) {
  return direction === 'left' ? (
    <svg viewBox="862.335 5805.33 13.333 13.34" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M869.001 5805.33L870.176 5806.51L865.526 5811.17H875.668V5812.83H865.526L870.176 5817.49L869.001 5818.67L862.335 5812L869.001 5805.33Z" fill="currentColor"/>
    </svg>
  ) : (
    <svg viewBox="916.332 5805.33 13.333 13.34" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M922.999 5805.33L921.824 5806.51L926.474 5811.17H916.332V5812.83H926.474L921.824 5817.49L922.999 5818.67L929.665 5812L922.999 5805.33Z" fill="currentColor"/>
    </svg>
  );
}
