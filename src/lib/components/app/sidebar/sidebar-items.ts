import { ReceiptText, File, Vote, UsersRound } from "lucide-svelte";
const sidebarItems = {
  navMain: [
    {
      title: "Faturas",
      url: "/",
      icon: ReceiptText
    },
    {
      title: "Propostas",
      url: "/",
      icon: Vote
    },
    {
      title: "Documentos",
      url: "/",
      icon: File
    },
    {
      title: "Colaboradores",
      url: "/",
      icon: UsersRound
    },
  ],
};

export default sidebarItems;
