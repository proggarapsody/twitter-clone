import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { classicNameResolver } from 'typescript';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FullscreenExitTwoTone } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import GroupIcon from '@material-ui/icons/PeopleOutline';
import { ModalBlock } from '../components/Modal';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 54px)',
  },
  blueSide: {
    display: 'flex',

    backgroundColor: '#69C4FC',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  loginSide: {
    display: 'flex',

    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideButton: {
    marginTop: 10,
  },
  loginSideTwitterIcon: {
    fontSize: 50,
    color: '#1099F7',
  },
  loginSideWrapper: {
    width: 300,
    margin: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  loginSideTitle: {
    fontWeight: 800,
    marginTop: 20,
    marginBottom: 30,
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '350%',
    width: '350%',
    color: '#1099F7',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: 380,
    display: 'flex',
    flexDirection: 'column',

    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListIcon: {
    margin: 10,
    fontSize: 25,
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const [visible, setVisible] = useState<'SignIn' | 'SignUp'>();

  const handleClickOpenSignIn = () => {
    setVisible('SignIn');
  };

  const handleClickOpenSignUp = () => {
    setVisible('SignUp');
  };
  const handleClose = () => {
    setVisible(undefined);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.blueSide}>
        <TwitterIcon className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <GroupIcon className={classes.blueSideListIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListIcon} />
              Присоединяйтесь к сообществу.
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon className={classes.loginSideTwitterIcon} />
          <Typography variant="h6" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>

          <Typography>
            <b>Присоединяйтесь к Twitter прямо сейчас!</b>
          </Typography>

          <Button
            onClick={handleClickOpenSignUp}
            variant="contained"
            color="primary"
            className={classes.loginSideButton}
          >
            <b>Зарегистрироваться</b>
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            className={classes.loginSideButton}
          >
            <b>Войти</b>
          </Button>

          <ModalBlock
            title="Войти в twitter"
            isVisible={visible === 'SignIn'}
            onClose={handleClose}
          >
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  InputLabelProps={{ shrink: true }}
                  label="Email address"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Password"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleClose}
                  style={{ marginTop: 20 }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  <b>Войти</b>
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock
            title="Создайте учетную запись"
            isVisible={visible === 'SignUp'}
            onClose={handleClose}
          >
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstname"
                  InputLabelProps={{ shrink: true }}
                  label="Имя"
                  type="text"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  InputLabelProps={{ shrink: true }}
                  label="Email address"
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  label="Password"
                  type="password"
                  variant="filled"
                  fullWidth
                />
                <Button
                  onClick={handleClose}
                  style={{ marginTop: 20 }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  <b>Зарегистрироваться</b>
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
