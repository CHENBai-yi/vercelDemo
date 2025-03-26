import React, { useContext, useRef, useEffect } from "react";
import { MenuContext } from "../../../widgets/Menu/context";
import { MenuItemProps } from "../types";
import { useMatchBreakpoints } from "../../../contexts";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";

const MenuItem: React.FC<React.PropsWithChildren<MenuItemProps>> = ({
  children,
  href,
  isActive = false,
  isDisabled = false,
  variant = "default",
  scrollLayerRef,
  statusColor,
  ...props
}) => {
  const { isMobile } = useMatchBreakpoints();
  const menuItemRef = useRef<HTMLDivElement>(null);
  const { linkComponent } = useContext(MenuContext);

  // 检查 href 是否是外部链接 (http:// 或 https:// 开头)
  const isExternalLink = href?.startsWith("http://") || href?.startsWith("https://");
  const itemLinkProps: any = href
    ? {
        as: linkComponent,
        href,
        ...(isExternalLink && { target: "_blank", rel: "noopener noreferrer" }), // 如果是外部链接，添加 target 和 rel 属性
      }
    : {
        as: "div",
      };

  useEffect(() => {
    if (!isMobile || !isActive || !menuItemRef.current || !scrollLayerRef?.current) return;
    const scrollLayer = scrollLayerRef.current;
    const menuNode = menuItemRef.current.parentNode as HTMLDivElement;
    if (!menuNode) return;
    if (
      scrollLayer.scrollLeft > menuNode.offsetLeft ||
      scrollLayer.scrollLeft + scrollLayer.offsetWidth < menuNode.offsetLeft + menuNode.offsetWidth
    ) {
      scrollLayer.scrollLeft = menuNode.offsetLeft;
    }
  }, [isActive, isMobile, scrollLayerRef]);

  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant} ref={menuItemRef}>
      <StyledMenuItem
        {...itemLinkProps}
        $isActive={isActive}
        $isDisabled={isDisabled}
        $variant={variant}
        $statusColor={statusColor}
        {...props}
      >
        {children}
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
