import { TabItem, Table, TableHead, TableHeadCell, Tabs } from "flowbite-react";
import Divider from "../../components/other/Divider";
import Header from "../../components/other/Header";
import { RxCardStack } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";

const CRM = () => {
  return (
    <>
      <Header
        title="CRM Page"
        paragraph="Welcome admin! This is the CRM page. Here you can manage your business cards."
      />
      <Divider />
      <div className="page-wrapper">
        <Tabs
          style="default"
          className="w-1/2"
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
            <Table striped hoverable>
              <TableHead>
                <TableHeadCell autoCapitalize="none">Title</TableHeadCell>
                <TableHeadCell>Subtitle</TableHeadCell>
                <TableHeadCell>Description</TableHeadCell>
                <TableHeadCell>Mail</TableHeadCell>
                <TableHeadCell>Phone Number</TableHeadCell>
                <TableHeadCell>Created At</TableHeadCell>
              </TableHead>
            </Table>
          </TabItem>
          <TabItem title="Users" icon={FaUsers}></TabItem>
        </Tabs>
      </div>
    </>
  );
};

export default CRM;
