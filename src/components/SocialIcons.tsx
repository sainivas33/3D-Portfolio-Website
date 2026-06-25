import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const iconItems = Array.from(social.querySelectorAll("span")).map(
      (item) => {
        const elem = item as HTMLElement;
        const link = elem.querySelector("a") as HTMLElement;
        const rect = elem.getBoundingClientRect();

        return {
          elem,
          link,
          rect,
          mouseX: rect.width / 2,
          mouseY: rect.height / 2,
          currentX: 0,
          currentY: 0,
        };
      }
    );

    const updatePosition = () => {
      iconItems.forEach((item) => {
        item.currentX += (item.mouseX - item.currentX) * 0.1;
        item.currentY += (item.mouseY - item.currentY) * 0.1;

        item.link.style.setProperty("--siLeft", `${item.currentX}px`);
        item.link.style.setProperty("--siTop", `${item.currentY}px`);
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    let animationFrameId = requestAnimationFrame(updatePosition);

    const onMouseMove = (e: MouseEvent) => {
      iconItems.forEach((item) => {
        item.rect = item.elem.getBoundingClientRect();
        const x = e.clientX - item.rect.left;
        const y = e.clientY - item.rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          item.mouseX = x;
          item.mouseY = y;
        } else {
          item.mouseX = item.rect.width / 2;
          item.mouseY = item.rect.height / 2;
        }
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/sainivas33"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/sainivas-katika-27021332a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://x.com/TheSaiForward"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/sainivas____?igsh=MWpuMGN4dHl0Y2I2Yw=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/1-Vsbm7CjwLZL-MTpb39PFiuq-TUYrpT3/view?usp=drivesdk"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
