import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
	FaFortAwesome,
	FaSatelliteDish,
	CoTag,
	IoRocket,
	RiLinkM,
	RiGithubFill,
	RiLinkedinBoxFill,
	RiFacebookBoxFill,
	RiTwitterFill,
	RiZhihuLine,
	HiMail,
	FaPaw,
	AiCv,
	AiGoogleScholarSquare,
	RiBook2Fill,
	MdComputer,
	FaNetworkWired,
	CoLeetcode,
	PxNotes,
	CoStar,
	CoUser,
	CoHome,
	CoSearch,
	CoReadTheDocs
} from "oh-vue-icons/icons";
import About from "./components/About.vue"

addIcons(
	FaFortAwesome,
	FaSatelliteDish,
	CoTag,
	IoRocket,
	RiLinkM,
	RiGithubFill,
	RiLinkedinBoxFill,
	RiFacebookBoxFill,
	RiTwitterFill,
	RiZhihuLine,
	HiMail,
	FaPaw,
	AiCv,
	AiGoogleScholarSquare,
	RiBook2Fill,
	MdComputer,
	FaNetworkWired,
	CoLeetcode,
	PxNotes,
	CoStar,
	CoUser,
	CoHome,
	CoSearch,
	CoReadTheDocs
);

export default defineClientAppEnhance(({ app }) => {
  app.component("About", About);
});
