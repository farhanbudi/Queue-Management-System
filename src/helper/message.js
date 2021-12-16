import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
  const { confirm } = Modal;

const message = {
  warning: ({ title, content, fnOk = () => {} }) => {
    return confirm({
      title: (
        <h1>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{title}</span>
        </h1>
      ),
      icon: "",
      content: content,
      bodyStyle: { padding: "20px 0px" },
      className: "default-message message-inline",
      okText: "ok",
      destroyOnClose: true,
      onOk() {
        fnOk();
      },
    });
  },

  success: ({ title, content, fnOk = () => {} }) => {
    return confirm({
      title: (
        <h1>
          <FontAwesomeIcon icon={faCheckCircle} />
          <span style={{ marginLeft: "4px" }}>{title}</span>
        </h1>
      ),
      icon: "",
      content: content,
      bodyStyle: { padding: "20px 0px" },
      className: "default-message message-inline message-success",
      okText: "ok",
      destroyOnClose: true,
      onOk() {
        fnOk();
      },
    });
  },
  confirmWarning: function ({
    title,
    content,
    fnOk = () => {},
    fnCancel = () => {},
  }) {
    return confirm({
      title: (
        <h1>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}>{title}</span>
        </h1>
      ),
      icon: "",
      content: content,
      bodyStyle: { padding: "20px 0px" },
      className: "default-message",
      okText: "ok",
      cancelText: "batal",
      onOk() {
        fnOk();
      },
      onCancel() {
        fnCancel();
      },
    });
  },

  logout: function ({ fnOk = () => {} }) {
    return confirm({
      title: (
        <h1>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span style={{ marginLeft: "4px" }}> keluar</span>
        </h1>
      ),
      icon: "",
      content: (
        <div>
          <p>Anda yakin hendak keluar?</p>
        </div>
      ),
      bodyStyle: { padding: "20px 0px" },
      className: "default-message",
      okText: "ok",
      cancelText: "batal",
      onOk() {
        fnOk();
      },
      onCancel() {},
    });
  },
};

export {message}