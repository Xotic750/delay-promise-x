import delayPromise from 'src/delay-promise-x';
import identity from 'lodash/identity';

describe('delayPromise', () => {
  describe('delay', () => {
    it('should delay after resolution', async () => {
      expect.assertions(1);
      const value = await delayPromise(100, delayPromise(200, 'what'))
        .then(identity)
        .catch((error) => {
          throw error;
        });

      expect(value).toBe('what');
    });

    it("should resolve follower promise's value", async () => {
      expect.assertions(1);
      let resolveF = null;
      /* eslint-disable-next-line compat/compat */
      const f = new Promise((resolve) => {
        resolveF = resolve;
      });

      /* eslint-disable-next-line compat/compat */
      const v = new Promise((resolve) => {
        setTimeout(() => {
          resolve(3);
        }, 200);
      });

      resolveF(v);

      const value = await delayPromise(100, f)
        .then(identity)
        .catch((error) => {
          throw error;
        });

      expect(value).toBe(3);
    });
  });
});
