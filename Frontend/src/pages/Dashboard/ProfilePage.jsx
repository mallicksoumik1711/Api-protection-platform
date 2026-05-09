import { useState, useEffect } from "react";
import {
  Copy,
  CopyCheck,
  User,
  Mail,
  ShieldCheck,
  CalendarDays,
  KeyRound,
  SquareMousePointer,
  Database,
} from "lucide-react";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { getUser } from "../../api/auth";

function ProfilePage() {
  const [copiedField, setCopiedField] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error.message);
      }
    };
    fetchUser();
  }, []);

  const handleCopy = async (text, field) => {
    await navigator.clipboard.writeText(text);

    setCopiedField(field);

    setTimeout(() => {
      setCopiedField("");
    }, 2000);
  };

  const profileItems = [
    {
      icon: <User size={18} />,
      color: "purple",
      title: "Name",
      desc: "Username of the account",
      value: user?.name,
    },
    {
      icon: <Mail size={18} />,
      color: "amber",
      title: "Email",
      desc: "User email address",
      value: user?.email,
    },
    {
      icon: <SquareMousePointer size={18} />,
      color: "emerald",
      title: "User ID",
      desc: "Unique identifier for the user",
      value: user?._id,
      copy: true,
      field: "_id",
    },
    {
      icon: <ShieldCheck size={18} />,
      color: "blue",
      title: "Account Status",
      desc: "Current status of the user account",
      value: user?.status,
    },
    {
      icon: <KeyRound size={18} />,
      color: "rose",
      title: "Password Hash",
      desc: "Encrypted user password",
      value: `${user?.password.slice(0, 25)}...`,
      copy: true,
      field: "password",
      fullValue: user?.password,
    },
    {
      icon: <CalendarDays size={18} />,
      color: "cyan",
      title: "Created At",
      desc: "Account creation timestamp",
      value: new Date(user?.createdAt).toLocaleString(),
    },
    {
      icon: <CalendarDays size={18} />,
      color: "orange",
      title: "Updated At",
      desc: "Last updated timestamp",
      value: new Date(user?.updatedAt).toLocaleString(),
    },
    {
      icon: <Database size={18} />,
      color: "pink",
      title: "Schema Version",
      desc: "MongoDB document version",
      value: user?.__v,
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.profilePage.tag}
        title={DashboardHeaderValues.profilePage.title}
        description={DashboardHeaderValues.profilePage.description}
        features={DashboardHeaderValues.profilePage.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div className="max-w-4xl mx-auto mt-6 sm:mt-10 space-y-3">
          {profileItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 hover:border-zinc-800 transition"
            >
              <div className="flex items-center justify-between gap-3">
                {/* LEFT */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`min-w-8 min-h-8 sm:w-9 sm:h-9 w-8 h-8 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-400`}>
                      {item.icon}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm sm:font-medium text-white truncate">
                      {item.title}
                    </p>

                    <p className="hidden sm:block text-xs text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[45%] sm:max-w-none">
                  <span className="text-xs sm:text-sm text-zinc-400 truncate">
                    {item.value}
                  </span>

                  {item.copy && (
                    <button
                      onClick={() =>
                        handleCopy(item.fullValue || item.value, item.field)
                      }
                      className="flex-shrink-0 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      {copiedField === item.field ? (
                        <CopyCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
