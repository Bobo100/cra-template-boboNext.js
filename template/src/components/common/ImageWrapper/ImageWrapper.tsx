// src/components/common/imageWrapper/imageWrapper.tsx
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

interface ImageWrapperProps extends Omit<ImageProps, "ref"> {
  /** 方便沿用你原有命名；其實可直接用 Image 的 ref */
  useRef?: any;
  /** 當 fill=true 且沒傳 sizes 時要用的預設 sizes */
  defaultFillSizes?: string; // e.g. "100vw"
}

/**
 * 改善點：
 * 1) fill=true 時若未提供 sizes，會用 defaultFillSizes 或 "100vw"
 * 2) 非 fill：若 style 只改了 width 或 height 其中一個，就補上另一個為 auto
 */
const ImageWrapper = forwardRef<HTMLImageElement, ImageWrapperProps>(
  function ImageWrapper(props, ref) {
    const {
      useRef = null,
      loader,
      id,
      className,
      src,
      width = 100,
      height = 100,
      fill = false,
      sizes,
      defaultFillSizes = "100vw",
      quality = 85,
      priority = false,
      alt = "",
      style,
      draggable = false,
      onLoad,
      onClick,
      placeholder = "empty",
      blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mNkqGfAAIxDWRAAOIQFAap6xDkAAAAASUVORK5CYII=",
      loading,
      ...rest
    } = props;

    const imgRef = (useRef ?? ref) as any;

    // ---- (A) fill 模式：一定要有 sizes ----
    if (fill) {
      const safeSizes = sizes ?? defaultFillSizes ?? "100vw";
    //   console.log("ImageWrapper fill sizes:", safeSizes);
      return (
        <Image
          ref={imgRef}
          loader={loader}
          id={id}
          className={className}
          src={src as any}
          fill
          sizes={safeSizes}
          quality={quality}
          priority={priority}
          alt={alt}
          style={style}
          draggable={draggable}
          onLoad={onLoad}
          onClick={onClick}
          placeholder={placeholder as any}
          blurDataURL={blurDataURL}
          loading={loading}
          {...rest}
        />
      );
    }

    // ---- (B) 非 fill：若只改了 width 或 height 的其中一個，補上另一個為 auto ----
    let patchedStyle = style as React.CSSProperties | undefined;
    if (style) {
      const hasW = style.width !== undefined;
      const hasH = style.height !== undefined;
      if (hasW && !hasH) {
        patchedStyle = { ...style, height: "auto" };
      } else if (!hasW && hasH) {
        patchedStyle = { ...style, width: "auto" };
      }
    }

    return (
      <Image
        ref={imgRef}
        loader={loader}
        id={id}
        className={className}
        src={src as any}
        width={width}
        height={height}
        // 非 fill 下 sizes 不是必填；若你想要也可傳進來
        sizes={sizes}
        quality={quality}
        priority={priority}
        alt={alt}
        style={patchedStyle}
        draggable={draggable}
        onLoad={onLoad}
        onClick={onClick}
        placeholder={placeholder as any}
        blurDataURL={blurDataURL}
        loading={loading}
        {...rest}
      />
    );
  }
);

export default ImageWrapper;
