// src/styles/shared.js
import styled from "styled-components";

export const SectionLabel = styled.span`
  font-family: var(--font-family);
  font-size: var(--font-label);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
`;

export const SectionHeading = styled.h2`
  font-family: var(--font-family);
  font-size: var(--font-heading);
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
`;

export const SectionSubtitle = styled.p`
  font-family: var(--font-family);
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
  max-width: 620px;
`;

export const FeatureCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  transition:
    border-color var(--transition),
    transform var(--transition);

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-3px);
  }
`;

export const FeatureIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.01em;
`;

export const FeatureText = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  margin: 0;
`;
