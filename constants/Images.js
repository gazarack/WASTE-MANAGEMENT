// local imgs
const Onboarding = require("../assets/imgs/bg.png");
const Logo = require("../assets/imgs/argon-logo.png");
const LogoOnboarding = require("../assets/imgs/argon-logo-onboarding.png");
const ProfileBackground = require("../assets/imgs/profile-screen-bg.png");
const RegisterBackground = require("../assets/imgs/register-bg.png");
const Pro = require("../assets/imgs/getPro-bg.png");
const ArgonLogo = require("../assets/imgs/argonlogo.png");
const iOSLogo = require("../assets/imgs/ios.png");
const androidLogo = require("../assets/imgs/android.png");
// internet imgs

const ProfilePicture =
  "data:image/jpeg;base64,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";

const Viewed = [
  "https://images.unsplash.com/photo-1501601983405-7c7cabaa1581?fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1551798507-629020c81463?fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1503642551022-c011aafb3c88?fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=240&q=80"
];

const Products = {
  "View article":
    "https://images.unsplash.com/photo-1501601983405-7c7cabaa1581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=840&q=840"
};

export default {
  Onboarding,
  Logo,
  LogoOnboarding,
  ProfileBackground,
  ProfilePicture,
  RegisterBackground,
  Viewed,
  Products,
  Pro,
  ArgonLogo,
  iOSLogo,
  androidLogo
};
