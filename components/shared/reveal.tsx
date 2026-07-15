"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Gedeelde scroll-animatie voor de homepage secties.
 *
 * Elementen faden zacht in beeld met een klein zetje omhoog, één keer,
 * wanneer ze in beeld komen. Binnen een sectie verschijnen losse items na
 * elkaar (stagger), zodat een rij kaarten verzorgd opbouwt in plaats van
 * ineens.
 *
 * De hele configuratie staat hier op één plek. Wil je het gevoel bijstellen,
 * pas dan DURATION, EASE, OFFSET, STAGGER of AMOUNT aan.
 *
 * Toegankelijkheid: bij `prefers-reduced-motion` staat de content direct
 * stil en zichtbaar, zonder beweging (zie ook de regel in styles/globals.css
 * en de noscript-fallback in app/layout.tsx). De content blijft dus ook
 * zichtbaar als JavaScript uitvalt of traag laadt.
 */
const DURATION = 0.5; // s
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]; // zachte ease-out
const OFFSET = 12; // px omhoog
const STAGGER = 0.08; // s tussen opeenvolgende items
const AMOUNT = 0.2; // deel van het element in beeld voordat het start

const viewport = { once: true, amount: AMOUNT } as const;

function itemVariants(reduce: boolean, delay = 0): Variants {
  // De delay hoort alleen bij een losse Reveal. Binnen een RevealGroup mag
  // hij niet gezet worden: staggerChildren injecteert daar zelf een delay per
  // kaart, en een expliciete delay op het kind zou die stagger overschrijven,
  // waardoor alle kaarten tegelijk verschijnen in plaats van na elkaar.
  const transition = reduce
    ? { duration: 0 }
    : { duration: DURATION, ease: EASE, ...(delay ? { delay } : {}) };

  return {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : OFFSET },
    visible: { opacity: 1, y: 0, transition },
  };
}

function groupVariants(reduce: boolean): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : STAGGER } },
  };
}

/** De HTML-elementen die de wrappers kunnen aannemen, zodat semantiek
 *  (ol, ul, li) behouden blijft. */
type Tag = "div" | "ol" | "ul" | "li";

const motionTags = {
  div: motion.div,
  ol: motion.ol,
  ul: motion.ul,
  li: motion.li,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
};

/**
 * Reveal fade't één blok in beeld wanneer het in zicht komt. Gebruik dit
 * voor losse blokken zoals een sectiekop, het Conditional Access-blok of het
 * afsluitende CTA-blok. Voor een rij kaarten: RevealGroup met RevealItem.
 */
function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
}: RevealProps & { delay?: number }) {
  const reduce = useReducedMotion() ?? false;
  const Tag = motionTags[as] as typeof motion.div;

  return (
    <Tag
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={itemVariants(reduce, delay)}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealGroup is de container om een rij items. De groep start de animatie
 * wanneer hij in beeld komt en laat de losse RevealItems na elkaar
 * verschijnen. De grid- of lijstklassen geef je gewoon mee via className.
 */
function RevealGroup({ children, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const Tag = motionTags[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={groupVariants(reduce)}
    >
      {children}
    </Tag>
  );
}

/**
 * RevealItem is één item binnen een RevealGroup. Het erft de animatiestaat
 * van de groep, dus het heeft geen eigen trigger nodig.
 */
function RevealItem({ children, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const Tag = motionTags[as] as typeof motion.div;

  return (
    <Tag data-reveal="" className={className} variants={itemVariants(reduce)}>
      {children}
    </Tag>
  );
}

export { Reveal, RevealGroup, RevealItem };
