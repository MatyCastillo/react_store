import { React, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  makeStyles,
  LinearProgress,
} from "@material-ui/core";

function BuyerForm(prop) {
  const [orderInProgress, serOrderInProgress] = useState(false);
  const [invalidDialog, setInvalidDialog] = useState({
    open: false,
    message: "",
  });
  const [buyerData, setBuyerData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setBuyerData({
      ...buyerData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    if (buyerData.name == "") {
      setInvalidDialog({
        open: true,
        message: "Completá el nombre del comprador",
      });
      document.getElementsByName("name")[0].focus();
      return;
    }
    if (buyerData.phone == "") {
      setInvalidDialog({
        open: true,
        message: "Completá el teléfono del comprador",
      });
      document.getElementsByName("phone")[0].focus();
      return;
    }
    if (
      buyerData.email != buyerData.repeatEmail ||
      buyerData.email == "" ||
      !buyerData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      buyerData.email != buyerData.repeatEmail
        ? setInvalidDialog({
            open: true,
            message: "Repetí el mismo email en ambos campos",
          })
        : setInvalidDialog({
            open: true,
            message: "El email que ingresaste no válido",
          });
      document.getElementsByName("email")[0].focus();
      return;
    }

    prop.finish(buyerData);
  };

  return (
    <div>
      <Dialog
        open={prop.open}
        onClose={prop.close}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Formulario para finalizar el pedido
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, complete el siguiente formulario con los datos de
            facturación para generara la orden del pedido.
          </DialogContentText>

          <TextField
            autoFocus
            id="name"
            name="name"
            label="Nombre"
            color="secondary"
            fullWidth
            onChange={handleInputChange}
            disabled={orderInProgress}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Teléfono"
            type="number"
            fullWidth
            onChange={handleInputChange}
            disabled={orderInProgress}
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Correo electrónico"
            type="email"
            fullWidth
            onChange={handleInputChange}
            disabled={orderInProgress}
          />
          <TextField
            margin="dense"
            id="repeatEmail"
            name="repeatEmail"
            label="Repetir correo electrónico"
            type="email"
            fullWidth
            onChange={handleInputChange}
            disabled={orderInProgress}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => prop.close()}
            variant="outlined"
            disabled={orderInProgress}
          >
            Cancel
          </Button>
          <Button
            onClick={() => prop.close()}
            color="primary"
            variant="outlined"
            onClick={() => validateForm()}
            disabled={orderInProgress}
          >
            Finalizar pedido
          </Button>
        </DialogActions>
        {<LinearProgress />}
      </Dialog>
    </div>
  );
}

export default BuyerForm;
