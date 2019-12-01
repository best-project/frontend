type SocialButtonProps = {
  type: "facebook" | "twitter" | "google" | "linkedin" | "instagram";
  size: "sm" | "lg" | "default";
  onClick: () => void;
};

export default SocialButtonProps;
