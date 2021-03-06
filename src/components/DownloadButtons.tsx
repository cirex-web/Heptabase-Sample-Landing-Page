import {
  SlButton,
  SlIcon,
  SlButtonGroup,
} from "@shoelace-style/shoelace/dist/react";
import { getOS } from "../util/getOS";

type possible_os = "Mac" | "Windows" | "Mac with M1 chip" | "Linux";
type downloadsMap = { [os in possible_os]: { url: string; icon?: string } };
const downloads: downloadsMap = {
  Mac: {
    url: "https://github.com/heptameta/project-meta/releases/download/v0.139.0/Hepta-0.139.0.dmg",
    icon: "apple",
  },
  Windows: {
    url: "https://github.com/heptameta/project-meta/releases/download/v0.139.0/Hepta-Setup-0.139.0.exe",
    icon: "windows",
  },
  "Mac with M1 chip": {
    url: "https://github.com/heptameta/project-meta/releases/download/v0.139.0/Hepta-0.139.0-arm64.dmg",
  },
  Linux: {
    url: "https://github.com/heptameta/project-meta/releases/download/v0.139.0/Hepta-0.139.0.AppImage",
    icon: "download",
  },
};

const DownloadButtons = ({ center }: { center?: boolean }) => {
  const main_os_name = getOS();
  console.log(main_os_name);
  const main_os_key = (Object.keys(downloads).find((val) =>
    main_os_name.includes(val)
  ) ?? "Mac") as possible_os;
  return (
    <div className="container-download" style={{ margin: center ? "auto" : 0 }}>
      <SlButton
        variant="primary"
        size="large"
        className="large"
        href={downloads[main_os_key].url}
      >
        {downloads[main_os_key].icon && (
          <SlIcon name={downloads[main_os_key].icon} slot="prefix"></SlIcon>
        )}
        Install on {main_os_key}
      </SlButton>
      <SlButtonGroup>
        {Object.keys(downloads).map((os, i) => {
          if (os !== main_os_key) {
            return (
              <SlButton href={downloads[os as possible_os].url} key={i}>
                {os}
              </SlButton>
            );
          }
          return null;
        })}
      </SlButtonGroup>
    </div>
  );
};
export default DownloadButtons;
