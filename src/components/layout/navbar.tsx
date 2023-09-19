import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";
import { User } from "@/core/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User2, ClipboardList, History, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n, t } = useTranslation();
  let userstr = localStorage.getItem("user");
  const parse: User | undefined = userstr ? JSON.parse(userstr) : undefined;
  const [user, setUser] = useState<User | undefined>(parse);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname == "/login";
  const logout = () => {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/");
  };
  const login = () => {
    navigate("/login");
    // setUser({ name: "mhing", image: "https://picsum.photos/200/300" });
  };
  const homepage = () => {
    navigate("/");
  };
  const toservicelist = () => {
    navigate("/servicelist");
  };

  const changeLanguage = (e: any) => {
    i18n.changeLanguage(e ? "en" : "th");
  };

  const checked = i18n.language == "en" ? true : false;

  return (
    <>
      <nav
        id="navbar"
        className=" px-[16px] lg:px-52 md:px-[6rem] flex justify-between shadow-lg shadow-black-200 py-3 sticky  bg-white top-0 z-50"
      >
        <div className="flex items-center col-span-3">
          <img
            src={AppIcon}
            alt="Logo"
            className="w-6 hidden md:block md:w-8"
            onClick={homepage}
          />
          <Button
            variant="link"
            className="no-underline hover:no-underline text-blue-600 pl-0"
            onClick={homepage}
          >
            <div className="flex text-sm lg:text-lg lg:pl-2 md:text-lg md:pl-[8px]">
              HomeServices
            </div>
          </Button>
          <Button
            className="hover:no-underline hover:bg-blue-500  active:bg-blue-800 disabled:bg-white disabled:text-blue-700 disabled:opacity-100 text-sm lg:text-lg md:text-lg"
            onClick={toservicelist}
          >
            {t("our_services")}
          </Button>
        </div>
        <div className="flex items-center">
          {user == undefined ? (
            isLoginPage ? (
              ""
            ) : (
              <Button
                onClick={login}
                variant="outline-primary"
                className="md:text-lg"
              >
                {t("user.login")}
              </Button>
            )
          ) : (
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <div className="pr-5 text-gray-700">{user.name}</div>
                    <Avatar>
                      <AvatarImage src={user.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    <User2 className="pr-1 w-5" />
                    {t("user.profile")}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    <ClipboardList className="pr-1 w-5" />
                    {t("user.order_list")}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    <History className="pr-1 w-5" />
                    {t("user.history")}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer"
                  >
                    <LogOut className="pr-1 w-5" />
                    {t("user.logout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="bell" size="icon" className="rounded-full ml-3">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          )}
          <Switch
            defaultChecked={checked}
            className={
              "ml-4 relative before:absolute before:text-[12px] after:text-[12px] " +
              (i18n.language == "en"
                ? "before:content-['EN'] before:text-white"
                : "after:content-['TH']")
            }
            onCheckedChange={changeLanguage}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
