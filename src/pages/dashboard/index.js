import {Helmet} from "react-helmet-async";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {MdOutlineSupervisorAccount} from "react-icons/md";
import {BsBoxSeam} from "react-icons/bs";
import StickyHeadTable from "./UserTable/ReportTable";
import ModalItem from "../../components/Modal/ModalItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const [currentColor, setCurrentColor] = React.useState("#45cccc");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Helmet>
        <title>Dashboard-Management</title>
      </Helmet>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 justify-center items-center gap-2 px-3">
        <div className="bg-white h-44 rounded-xl lg:col-span-2 lg:w-[85%] p-8 pt-9 bg-hero-pattern bg-cover bg-no-repeat">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Entries</p>
              <p className="text-2xl">63,448</p>
            </div>
          </div>

          <div className="mt-6">
            <button onClick={handleOpen} className="bg-[#45cccc] px-5 hover:bg-[#458783] text-white py-2 rounded">
              Add New Item
            </button>
          </div>
        </div>

        <div className="bg-white h-44 lg:w-60  p-4 pt-9 rounded-2xl ">
          <button type="button" className="text-3xl opacity-0.9 rounded-full bg-[#95e8e8]  p-4 hover:drop-shadow-xl">
            <MdOutlineSupervisorAccount />
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">4</span>
            <span className={`text-sm text-[#95e8e8] ml-2`}>20%</span>
          </p>
          <p className="text-sm text-gray-400  mt-1">Today's Entries</p>
        </div>

        <div className="bg-white h-44 lg:w-60  p-4 pt-9 rounded-2xl ">
          <button type="button" className="text-3xl opacity-0.9 rounded-full bg-[#95e8e8]  p-4 hover:drop-shadow-xl">
            <BsBoxSeam />
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">46</span>
            <span className={`text-sm text-[#95e8e8] ml-2`}>20%</span>
          </p>
          <p className="text-sm text-gray-400  mt-1">To be Delivered Today</p>
        </div>
      </div>
      <div className="px-6 ">
        <div className="px-8 py-4 mt-8 rounded-lg bg-white ">
          <div className=" p-0 lg:p-2">
            <StickyHeadTable />
          </div>
        </div>
      </div>

      {/* modal */}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalItem onClose={handleClose} />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
