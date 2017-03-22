import FlatObject from '../index'

const benchmarkObject = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  i: {
                    j: {
                      k: 'hey you'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const wm = new WeakMap()
const key = {a: 'b'}

wm.set(key, 'internet')
console.time('Is WeakMap slow ? (accessing data)')
const internet = wm.get(key)
console.timeEnd('Is WeakMap slow ? (accessing data)')
console.log(internet)
console.log()

console.time('FlatObject: creating new Instance')
const flat = new FlatObject(benchmarkObject)
console.timeEnd('FlatObject: creating new Instance')
console.log()

console.time('FlatObject: accessing a really deep key')
const fy = flat.get('a.b.c.d.e.f.g.h.i.j.k')
console.timeEnd('FlatObject: accessing a really deep key')
console.log('FlatObject value:', fy)
console.log()

console.time('Classic Objects: (safely) accessing a really deep key')
const oy = benchmarkObject.a &&
  benchmarkObject.a.b &&
   benchmarkObject.a.b.c &&
    benchmarkObject.a.b.c.d &&
      benchmarkObject.a.b.c.d.e &&
        benchmarkObject.a.b.c.d.e.f &&
          benchmarkObject.a.b.c.d.e.f.g &&
            benchmarkObject.a.b.c.d.e.f.g.h &&
              benchmarkObject.a.b.c.d.e.f.g.h.i &&
                benchmarkObject.a.b.c.d.e.f.g.h.i.j &&
                  benchmarkObject.a.b.c.d.e.f.g.h.i.j.k
console.timeEnd('Classic Objects: (safely) accessing a really deep key')
console.log('Classic object value (safely):', oy)
console.log()

console.time('Classic Objects: (dangerously) accessing a really deep key')
const danger = benchmarkObject.a.b.c.d.e.f.g.h.i.j.k
console.timeEnd('Classic Objects: (dangerously) accessing a really deep key')
console.log('Classic object value (dangerously):', danger)
console.log()
