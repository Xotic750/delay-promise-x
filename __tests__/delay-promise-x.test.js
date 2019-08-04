import PromiseCtr from '@xotic750/promise-x';
import delayPromise from 'src/delay-promise-x';

const failIfThrows = function failIfThrows(done) {
  return function(e) {
    done(e || new Error());
  };
};

describe('delayPromise', () => {
  it('should delay after resolution', () => {
    expect.assertions(1);

    return new PromiseCtr((done) => {
      return delayPromise(100, delayPromise(200, 'what'))
        .then((value) => {
          expect(value).toBe('what');
          done();
        }, failIfThrows(done))
        .catch(failIfThrows(done));
    });
  });

  it("should resolve follower promise's value", () => {
    expect.assertions(1);

    return new PromiseCtr((done) => {
      let resolveF = null;
      const f = new PromiseCtr((resolve) => {
        resolveF = resolve;
      });

      const v = new PromiseCtr((resolve) => {
        setTimeout(() => {
          resolve(3);
        }, 200);
      });

      resolveF(v);

      return delayPromise(100, f)
        .then((value) => {
          expect(value).toBe(3);
          done();
        }, failIfThrows(done))
        .catch(failIfThrows(done));
    });
  });

  it('get Promise constructor used', function() {
    expect.assertions(1);
    expect(delayPromise.Promise).toBe(PromiseCtr);
  });

  it('set Promise constructor used', function() {
    expect.assertions(2);
    expect(() => {
      delayPromise.Promise = null;
    }).toThrow(TypeError);

    const Ctr = function Ctr() {};

    delayPromise.Promise = Ctr;
    expect(delayPromise.Promise).toBe(Ctr);
  });
});
