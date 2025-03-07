"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import Link from "next/link";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // Page load pr open hoga
  const [showButton, setShowButton] = useState(true);

  // Jab modal band hoga to button show ho
  const handleClose = () => {
    setIsOpen(false);
    setShowButton(true);
  };

  // WhatsApp Contacts Data
  const contacts = [{ name: "Rafay Khwaja", number: "0528977529" }];

  return (
    <div>
      {/* Dialog for WhatsApp Popup */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-center items-center w-full rounded-t-xl py-4 bg-gray-900">
                <img className=" w-[90px] " src="/images/orionsols-white.png" />
              </div>
            </DialogTitle>
          </DialogHeader>

          {/* WhatsApp Contacts List */}
          <Accordion type="single" collapsible>
            {contacts.map((contact, index) => (
              <Link
                key={index}
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <AccordionItem value={`contact-${index}`}>
                  <div className="flex p-5">
                    <img
                      src="/images/whatsapp-icon.jpg"
                      alt="image"
                      className="w-[70px] h-[70px] rounded-full"
                    />

                    <AccordionTrigger>
                      <div className="w-fit relative bottom-3 ">
                        <h1 className="text-gray-900">{contact.name}</h1>

                        <p className="text-gray-500">
                          Business Consultant (English, Urdu, hindi)
                        </p>
                        <div className="flex">
                          <p className="text-gray-600">Online </p>
                          <div className="w-2 h-2 rounded-full bg-green-700 relative left-1 top-2"></div>
                        </div>
                      </div>
                    </AccordionTrigger>
                  </div>
                </AccordionItem>
              </Link>
            ))}
          </Accordion>
        </DialogContent>
      </Dialog>

      {/* Button to Show WhatsApp Popup Again */}
      {showButton && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-50 flex items-center text-lg" // Increased padding and font size
        >
          {/* WhatsApp Logo SVG */}
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/FFFFFF/whatsapp--v1.png"
            alt="whatsapp--v1"
          />{" "}
        </Button>
      )}
    </div>
  );
};

export default WhatsAppPopup;
