import React, { useEffect, useState } from "react";

interface FullYearProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Whether to show the loading text while fetching the year.
   * Defaults to true.
   */
  showLoading?: boolean;

  /**
   * Custom component to display while loading.
   * Overrides `showLoading`.
   */
  loadingComponent?: React.ReactNode;
}

const FullYear: React.FC<FullYearProps> = ({
  showLoading = true,
  loadingComponent,
  ...props
}) => {
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    const fetchYear = async () => {
      try {
        const response = await fetch("https://getfullyear.com/api/year");
        const data = await response.json();
        setYear(data.year_string || String(data.year));
      } catch (error) {
        console.error("Error fetching the year:", error);
      }
    };

    fetchYear();
  }, []);
   const yearOnly = new Date().getFullYear()
  if (!year) {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }
    if (showLoading) {
      return <p {...props}>{yearOnly}</p>;
    }
    return null;
  }

  return <p {...props}>{year}</p>;
};

export default FullYear;
