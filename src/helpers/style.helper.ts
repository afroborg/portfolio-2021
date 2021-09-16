export const inlineStyles = (styles: Record<string, string>) =>
  Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');
