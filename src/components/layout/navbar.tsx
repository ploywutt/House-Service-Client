import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";
import { User } from "@/core/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User2, ClipboardList, History, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
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
  return (
    <>
      <nav className="px-52 flex justify-between shadow-lg shadow-black-200 py-3">
        <div className="flex items-center col-span-3">
          <Button
            variant="link"
            className="no-underline hover:no-underline text-blue-600"
          >
            <img src={AppIcon} alt="Logo" />
            <div className="flex text-lg pl-3">HomeServices</div>
          </Button>
          <Button className="hover:no-underline hover:bg-gray-100  active:bg-gray-200 disabled:bg-white disabled:text-blue-700 disabled:opacity-100">
            บริการของเรา
          </Button>
        </div>
        <div className="flex items-center">
          {user == undefined ? (
            isLoginPage ? (
              ""
            ) : (
              <Button onClick={login} variant="outline-primary">
                เข้าสู่ระบบ
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
                    ข้อมูลผู้ใช้
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    <ClipboardList className="pr-1 w-5" />
                    รายการคำสั่งซ่อม
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer">
                    <History className="pr-1 w-5" />
                    ประวัติการซ่อม
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-gray-800 hover:bg-gray-100 hover:text-gray-950 cursor-pointer"
                  >
                    <LogOut className="pr-1 w-5" />
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="secondary"
                size="icon"
                className="rounded-full ml-3"
              >
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
