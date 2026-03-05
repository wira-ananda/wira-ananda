import {
  HoverCard as HoverCardPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
  HoverCardPortal as HoverCardPortalPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  type HoverCardProps as HoverCardPrimitiveProps,
  type HoverCardTriggerProps as HoverCardTriggerPrimitiveProps,
  type HoverCardContentProps as HoverCardContentPrimitiveProps,
} from "@/components/ui/animate-ui/primitives/radix/hover-card";
import { cn } from "@/lib/utils";

type HoverCardProps = HoverCardPrimitiveProps;

function HoverCard(props: HoverCardProps) {
  return <HoverCardPrimitive {...props} />;
}

type HoverCardTriggerProps = HoverCardTriggerPrimitiveProps;

function HoverCardTrigger(props: HoverCardTriggerProps) {
  return <HoverCardTriggerPrimitive {...props} />;
}

type HoverCardContentProps = HoverCardContentPrimitiveProps;

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPortalPrimitive>
      <HoverCardContentPrimitive
        align={align}
        sideOffset={sideOffset}
        className={cn(
          ` z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md p-4 shadow-md backdrop-blur border-gray-800 bg-white/20 dark:bg-black/20 text-black dark:text-white`,
          className,
        )}
        {...props}
      />
    </HoverCardPortalPrimitive>
  );
}

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  type HoverCardProps,
  type HoverCardTriggerProps,
  type HoverCardContentProps,
};
