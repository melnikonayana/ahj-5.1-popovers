import widget from '../widget.js';

document.body.innerHTML = `
  <div class="container">
    <button type="button" class="btn" data-title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?">
        Click to toggle popover
    </button>
</div>
`;
const button = document.querySelector('.btn');

test('should create or delete tooltip', () => {
  widget();

  button.click();
  expect(document.body.querySelector('.popover')).toBeTruthy();

  button.click();
  expect(document.body.querySelector('.popover')).toBe(null);
});
