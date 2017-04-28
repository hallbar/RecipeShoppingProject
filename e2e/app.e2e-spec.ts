import { RecipeShoppingProjectPage } from './app.po';

describe('recipe-shopping-project App', () => {
  let page: RecipeShoppingProjectPage;

  beforeEach(() => {
    page = new RecipeShoppingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
