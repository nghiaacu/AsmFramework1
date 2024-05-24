import { CanActivateFn } from '@angular/router';

export const nghiahdph39065Guard: CanActivateFn = (route, state) => {
  if (1 > 2) {
    return true; //kiem tra dk, đúng thì return true -> cho phep truy cập
  }
  return false;
};
