import { TabItem, Tabs } from "flowbite-react";
import Divider from "../../components/other/Divider";
import Header from "../../components/other/Header";
import { FaUsers } from "react-icons/fa";
import CardsTab from "./Cards.tab";
import { RxCardStack } from "react-icons/rx";
import UsersTab from "./Users.tab";

const CRM = () => {
  return (
    <>
      <Header
        title="CRM Page"
        paragraph="Welcome admin! This is the CRM page. Here you can manage your business cards."
      />
      <Divider />
      <div className="page-wrapper mt-14 justify-start">
        <Tabs
          style="default"
          className="w-[90%] md:w-3/4"
          theme={{
            tablist: {
              base: "flex !w-full",
              tabitem: {
                base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:!ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
              },
            },
          }}
        >
          <TabItem active title="Cards" icon={RxCardStack}>
            <CardsTab />
          </TabItem>
          <TabItem title="Users" icon={FaUsers}>
            <UsersTab />
          </TabItem>
        </Tabs>
      </div>
    </>
  );
};

export default CRM;
