const showSuccessToast = (toaster, message, title = 'Succes') => {
  toaster.success(message, title, {
    timeOut: 5000,
  });
};

const showErrorToast = (toaster, message, title = 'Error') => {
  toaster.error(message, title);
};

const showWarningToast = (toaster, message, title = 'Opgelet') => {
  toaster.warning(message, title, {
    timeOut: 5000,
  });
};

export { showSuccessToast, showErrorToast, showWarningToast };
