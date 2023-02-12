import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Toast = ({type,massege,state,setState}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={state}
            autoHideDuration={3000}
            onClose={() => setState(false)}
          >
            <Alert
              onClose={() => setState(false)}
              severity={type}
              sx={{ width: "100%" }}
            >
              {massege}
            </Alert>
          </Snackbar>
    );
}

export default Toast;
