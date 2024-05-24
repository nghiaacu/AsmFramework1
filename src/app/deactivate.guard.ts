import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  alert('Ban ko được rời đi')
  
  return true;
};
