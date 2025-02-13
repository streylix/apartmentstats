const calculateColor = (rating) => {
    // Helper function to interpolate colors
    const interpolate = (start, end, factor) => {
      const r = Math.round(start.r + (end.r - start.r) * factor);
      const g = Math.round(start.g + (end.g - start.g) * factor);
      const b = Math.round(start.b + (end.b - start.b) * factor);
      return `rgb(${r}, ${g}, ${b})`;
    };
  
    // Define color ranges
    if (rating >= 4) { // Green range: 4.5-5.0
      const factor = (rating - 4) / 0.5; // 0 at 4.5, 1 at 5.0
      return interpolate(
        {r: 34, g: 197, b: 94},  // Darker green
        {r: 74, g: 222, b: 128}, // Brighter green
        factor
      );
    } else if (rating >= 3) { // Yellow range: 3.5-4.4
      const factor = (rating - 3) / 0.9;
      return interpolate(
        {r: 234, g: 179, b: 8},   // Darker yellow
        {r: 250, g: 204, b: 21},  // Brighter yellow
        factor
      );
    } else if (rating >= 2) { // Orange range: 2.5-3.4
      const factor = (rating - 2) / 0.9;
      return interpolate(
        {r: 234, g: 88, b: 12},   // Darker orange
        {r: 249, g: 115, b: 22},  // Brighter orange
        factor
      );
    } else { // Red range: 1.0-2.4
      const factor = (rating - 1.0) / 1.4;
      return interpolate(
        {r: 185, g: 28, b: 28},   // Darker red
        {r: 239, g: 68, b: 68},   // Brighter red
        factor
      );
    }
  };

  export default calculateColor