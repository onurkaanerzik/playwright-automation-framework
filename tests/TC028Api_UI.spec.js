const { test, expect } = require('@playwright/test');

test('API ile veri oluşturup UI da kontrol et', async ({ page, request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'Playwright Order',
            body: 'Order created by API',
            userId: 1
        }
    });

    expect(response.ok()).toBeTruthy();

    const order = await response.json();

    console.log(order);

    await page.goto('https://jsonplaceholder.typicode.com/posts');

    await expect(page.getByText('userId')).toBeVisible();

});