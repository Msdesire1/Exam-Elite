import React from "react";
import { TbX } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";

const GeneralModal = ({ heading, close, handleClose, content, arrowclose, backarrow, height }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full backdrop-blur ">
            <div
                onClick={handleClose}
                className="modal bg-opacity-80 fixed inset-0 flex items-center  justify-center"
            >
                <div
                    className={`modal-content bg-[var(--secondaryss-color)] ${height} lg:w-[40%] w-full rounded-b-[50px] transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="flex justify-between sticky top-0 border-b bg-[var(--primarys-color)] z-[500] border-white border-opacity-10 p-6 items-center">
                        <div className="flex flew-row justify-between w-full items-center">
                            <h4 className="text-[var(--text-color)] text-[16px]">{heading}</h4>
                            <div className="text-1xl cursor-pointer text-[var(--text-color)] border px-1 py-1  text-center rounded " onClick={close}>{backarrow}</div>
                            {/* <h4 className="text-white capitalize ">{heading}</h4> */}
                        </div>
                        <span
                            onClick={close}
                            className="text-xl cursor-pointer"
                        >
                            {arrowclose}
                        </span>
                    </div>

                    {/* <div className="border-b-[60px] border-white opacity-10"></div> */}
                    <div className="p-6 white overflow-y-auto ">
                        {content}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GeneralModal;