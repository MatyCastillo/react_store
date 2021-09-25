import { React, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  LinearProgress,
} from "@material-ui/core";

function BuyerForm(prop) {
  const [orderInProgress, serOrderInProgress] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nameHelper, setNameHelper] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phoneHelper, setPhoneHelper] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [repeatEmailError, setRepeatEmailError] = useState(false);
  const [repeatEmailHelper, setRepeatEmailHelper] = useState("");
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
      setNameError(true);
      setNameHelper("Ingrese nombre");
      document.getElementsByName("name")[0].focus();
      return;
    } else {
      setNameError(false);
      setNameHelper("");
    }
    if (buyerData.phone == "") {
      setPhoneError(true);
      setPhoneHelper("Ingrese un numero de telefono");
      document.getElementsByName("phone")[0].focus();
      return;
    } else {
      setPhoneError(false);
      setPhoneHelper("");
    }
    if (
      buyerData.email != buyerData.repeatEmail ||
      buyerData.email == "" ||
      !buyerData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      buyerData.email != buyerData.repeatEmail
        ? setRepeatEmailHelper("El mail no coincide")
        : setEmailHelper("El mail no es correcto");
      document.getElementsByName("email")[0].focus();
      return;
    } else {
      setEmailHelper("");
      setEmailError(false);
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
            error={nameError}
            helperText={nameHelper}
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
            error={phoneError}
            helperText={phoneHelper}
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
            error={emailError}
            helperText={emailHelper}
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
            error={repeatEmailError}
            helperText={repeatEmailHelper}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => prop.close()}
            variant="outlined"
            disabled={prop.loadingOrder}
          >
            Cancel
          </Button>
          <Button
            onClick={() => prop.close()}
            color="primary"
            variant="outlined"
            onClick={() => validateForm()}
            disabled={prop.loadingOrder}
          >
            Finalizar pedido
          </Button>
        </DialogActions>
        {prop.loadingOrder ? <LinearProgress /> : <></>}
      </Dialog>
    </div>
  );
}

export default BuyerForm;
