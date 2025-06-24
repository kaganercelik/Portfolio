import React, { useState } from "react";
import Chat from "./Chat/Chat";

export function ChatModal({ theme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "14px 18px",
          borderRadius: "50%",
          fontSize: 18,
          backgroundColor: theme.accentBright,
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        💬
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "90%",
              maxWidth: 650,
              height: "80vh",
              backgroundColor: theme.body,
              color: theme.text,
              borderRadius: 10,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: 12,
                borderBottom: `1px solid ${theme.text}`,
                fontWeight: "bold",
              }}
            >
              Chat Assistant
              <button
                onClick={() => setOpen(false)}
                style={{
                  float: "right",
                  background: "none",
                  border: "none",
                  fontSize: 18,
                  color: theme.text,
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
            </div>
            <Chat theme={theme} />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatModal;
