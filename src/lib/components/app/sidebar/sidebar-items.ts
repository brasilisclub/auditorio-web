import { LayoutDashboard, ReceiptText, File, Vote, UsersRound, Settings, LogOut } from "lucide-svelte";
const sidebarItems = {
  options: [
    {
      title: "Configurações",
      url: "/",
      icon: Settings,
    },
    {
      title: "Sair da conta",
      url: "/login",
      icon: LogOut
    },
  ],
  navigation: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
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
