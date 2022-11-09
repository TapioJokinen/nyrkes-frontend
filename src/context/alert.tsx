import React, { useCallback, useMemo, useState } from 'react';

import { AlertColor } from '@mui/material/Alert';

interface AlertContextType {
    open: boolean;
    severity: AlertColor;
    message: string;
    setAlert: (severity: AlertColor, message: string) => void;
    clearAlert: () => void;
}

const AlertContext = React.createContext<AlertContextType>(null!);

const AlertProvider = ({ children }: {children: React.ReactNode}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [message, setMessage] = useState<string>('');

  const setAlert = useCallback((_severity: AlertColor, _message: string) => {
    setOpen(true);
    setSeverity(_severity);
    setMessage(_message);
  }, []);

  const clearAlert = useCallback(() => {
    setOpen(false);
    setMessage('');
  }, []);

  const value = useMemo(() => ({
    open, severity, message, setAlert, clearAlert,
  }), [open, severity, message, setAlert, clearAlert]);

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};

export { AlertContext, AlertProvider };
