import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InputMask from "react-input-mask";

const states = [
  {
    value: "parana",
    label: "Paraná",
  },
  {
    value: "rioGrandeDoSul",
    label: "Rio Grande do Sul",
  },
  {
    value: "santaCatarina",
    label: "Santa Catarina",
  },
  {
    value: "saoPaulo",
    label: "São Paulo",
  },
];

function Perfil() {
  const [values, setValues] = useState({
    firstName: "Thiago",
    lastName: "Dimon Miranda",
    email: "thiago.298721@alunosatc.edu.br",
    phone: "",
    state: "Santa Catarina",
    country: "Brasil",
    school: "SATC - Sociedade de Assistência aos Trabalhadores do Carvão",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      [event.target.lastName]: event.target.value,
    }));
  }, []);

  const handleSubmit = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Card>
      <Grid container spacing={2} sx={{ mx: 2 }}>
        <Stack direction="row" display="flex" item xs={8} sx={{ my: 5 }}>
          <Avatar>T</Avatar>
        </Stack>
        <CardHeader
          subheader="As informações da conta podem ser editadas"
          title="Conta"
          sx={{ my: 2, mx: 2 }}
          item
          xs={2}
        />
      </Grid>
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ my: 3 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Nome"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Sobrenome"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Endereço de e-mail"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <InputMask
                fullWidth
                mask="(99) 99999-9999"
                maskChar=""
                label="Número de telefone"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              >
                {(inputProps) => <TextField {...inputProps} />}
              </InputMask>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="País"
                name="country"
                onChange={handleChange}
                value={values.country}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Estado"
                name="state"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                label="Instituição"
                name="school"
                onChange={handleChange}
                value={values.school}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "center", my: 5 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Salvar Informações
        </Button>
      </CardActions>
    </Card>
  );
}

export default Perfil;
