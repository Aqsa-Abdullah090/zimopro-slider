import { useTheme } from "@/context/theme-context"; // Import the theme context
import Heart from "./heart";

function HeaderBtns() {
  const { theme, toggleTheme } = useTheme(); // Use theme from context

  return (
    <div className="flex items-center gap-2 z-50">
      <Heart />
      <button>
        <img
          src="/assets/icons/share.svg"
          className="h-[20px] 3xl:h-[30px]"
          alt="Share"
        />
      </button>
      <button>
        <img
          src="/assets/icons/cam.svg"
          className="h-[20px] 3xl:h-[30px]"
          alt="Camera"
        />
      </button>
      <button
        onClick={() => {
          console.log("Theme button clicked!");
          toggleTheme(); // ✅ Use the toggleTheme function from context
        }}
        className="px-3 py-1 border rounded-lg z-[9999] transition-all bg-gray-200 text-black dark:bg-gray-800 dark:text-white relative"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default HeaderBtns;
