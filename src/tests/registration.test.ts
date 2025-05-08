import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import users from '../data/users.json';
import { User } from '../models/users.model';

test('User Registration', async ({ page }) => {
  const homePage = new HomePage(page);
  const regPage = new RegistrationPage(page);
  const user: User = users[0];

  await homePage.navigate();
  await homePage.clickSignupLogin();
  await regPage.enterBasicInfo(user.name, user.email);
  await regPage.fillAdditionalDetails(user.password);
});
