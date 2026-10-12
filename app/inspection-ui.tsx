import type { HTMLAttributes, ReactNode } from 'react';
import ArrowIcon from './arrow-icon';

type SectionProps = HTMLAttributes<HTMLElement> & { children: ReactNode };

export function InspectionSection({ className = '', children, ...props }: SectionProps) {
  return <section className={`inspection-section ${className}`.trim()} {...props}>{children}</section>;
}

type TypographyVariant = 'h1' | 'h2' | 'p1' | 'p2' | 'p3' | 'p4';
type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: 'h1' | 'h2' | 'p' | 'span' | 'strong';
  variant: TypographyVariant;
  children: ReactNode;
};

export function Typography({ as, variant, className = '', children, ...props }: TypographyProps) {
  const Tag = as ?? (variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : 'p');
  return <Tag className={`type-${variant} ${className}`.trim()} {...props}>{children}</Tag>;
}

type OutlineActionProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function OutlineAction({ href, children, className = '', external = false }: OutlineActionProps) {
  return <a className={`outline-action ${className}`.trim()} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
    <span>{children}</span><i><ArrowIcon/></i>
  </a>;
}
