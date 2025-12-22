export function ColoredLetters({
  letter = "I",
  size = "small",
  fontSize,
  mirror = false,
  topLeftColor = "#facc15",
  topRightColor = "#4ade80",
  bottomLeftColor = "#f87171",
  bottomRightColor = "#60a5fa",
  singleColor,
}: {
  letter?: string;
  size?: "small" | "medium" | "large";
  fontSize?: string | number;
  mirror?: boolean;
  topLeftColor?: string;
  topRightColor?: string;
  bottomLeftColor?: string;
  bottomRightColor?: string;
  singleColor?: string;
}) {
  // If singleColor is provided, use it for all positions
  const topLeft = singleColor || topLeftColor;
  const topRight = singleColor || topRightColor;
  const bottomLeft = singleColor || bottomLeftColor;
  const bottomRight = singleColor || bottomRightColor;
  const sizeClasses = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  const strokeWidth = {
    small: "1.25px",
    medium: "1.5px",
    large: "2px",
  };

  // Calculate stroke width based on font size if custom fontSize is provided
  const getStrokeWidth = () => {
    if (fontSize) {
      const fontSizeNum = typeof fontSize === "string" ? parseFloat(fontSize) : fontSize;
      // Scale stroke width proportionally (approximately 0.4% of font size)
      return `${fontSizeNum * 0.004}px`;
    }
    return strokeWidth[size];
  };

  // Calculate sizes based on fontSize
  const getCircleSize = () => {
    if (fontSize) {
      const fontSizeNum = typeof fontSize === "string" ? parseFloat(fontSize) : fontSize;
      // Circle size is proportional to fontSize (approximately 16.7% of fontSize for 70px at 420px)
      return `${fontSizeNum * 0.167}px`;
    }
    // Default sizes based on size prop
    const defaultSizes = {
      small: "20px",
      medium: "45px",
      large: "70px",
    };
    return defaultSizes[size];
  };

  const getRectangleSize = () => {
    if (fontSize) {
      const fontSizeNum = typeof fontSize === "string" ? parseFloat(fontSize) : fontSize;
      // Rectangle width is same as circle, height is approximately 3.57x (250px / 70px)
      return {
        width: `${fontSizeNum * 0.167}px`,
        height: `${fontSizeNum * 0.596}px`,
      };
    }
    // Default sizes based on size prop
    const defaultSizes = {
      small: { width: "20px", height: "71px" },
      medium: { width: "35px", height: "160px" },
      large: { width: "60px", height: "235px" },
    };
    return defaultSizes[size];
  };

  const circleSize = getCircleSize();
  const rectangleSize = getRectangleSize();
  const borderWidth = getStrokeWidth();

  return (
    <div
      className="grid inline-grid"
      style={{
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto",
        gap: "0.125rem",
      }}
    >
      <div>
        {/* Top Left - Circle */}
        <div
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: "50%",
            border: `${borderWidth} solid ${topLeft}`,
            backgroundColor: "transparent",
            opacity: 0.15,
            marginBottom: "15px",
            marginRight: "30px"
          }}
        />

        {/* Bottom Left - Rectangle */}
        <div
          style={{
            width: rectangleSize.width,
            height: rectangleSize.height,
            border: `${borderWidth} solid ${bottomLeft}`,
            backgroundColor: "transparent",
            opacity: 0.15,
            marginLeft: "5px",
            marginBottom: "40px"
          }}
        />
      </div>

      <div>

        {/* Top Right - Rectangle */}
        <div
          style={{
            width: rectangleSize.width,
            height: rectangleSize.height,
            border: `${borderWidth} solid ${topRight}`,
            backgroundColor: "transparent",
            opacity: 1,
            marginBottom: "20px",
          }}
        />

        {/* Bottom Right - Circle */}
        <div
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: "50%",
            border: `${borderWidth} solid ${bottomRight}`,
            backgroundColor: "transparent",
            opacity: 0.15,
          }}
        />
      </div>
    </div>
  );
}

