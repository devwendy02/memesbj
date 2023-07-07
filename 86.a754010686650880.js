(self.webpackChunkwall_st = self.webpackChunkwall_st || []).push([
    [86], {
        35972: (te, E, x) => {
            "use strict";
            E.Xx = E._w = E.aP = E.KS = E.jQ = void 0;
            x(25465);
            const z = x(56713);
            x(43403);

            function D(F) {
                const C = new Float64Array(16);
                if (F)
                    for (let O = 0; O < F.length; O++) C[O] = F[O];
                return C
            }
            E.jQ = 64, E.KS = 64, E.aP = 32, new Uint8Array(32)[0] = 9;
            const $ = D(),
                S = D([1]),
                L = (D([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                X = D([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                W = D([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            D([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function H(F, C) {
                for (let O = 0; O < 16; O++) F[O] = 0 | C[O]
            }

            function he(F) {
                let C = 1;
                for (let O = 0; O < 16; O++) {
                    let o = F[O] + C + 65535;
                    C = Math.floor(o / 65536), F[O] = o - 65536 * C
                }
                F[0] += C - 1 + 37 * (C - 1)
            }

            function ie(F, C, O) {
                const o = ~(O - 1);
                for (let w = 0; w < 16; w++) {
                    const ee = o & (F[w] ^ C[w]);
                    F[w] ^= ee, C[w] ^= ee
                }
            }

            function ge(F, C) {
                const O = D(),
                    o = D();
                for (let w = 0; w < 16; w++) o[w] = C[w];
                he(o), he(o), he(o);
                for (let w = 0; w < 2; w++) {
                    O[0] = o[0] - 65517;
                    for (let ne = 1; ne < 15; ne++) O[ne] = o[ne] - 65535 - (O[ne - 1] >> 16 & 1), O[ne - 1] &= 65535;
                    O[15] = o[15] - 32767 - (O[14] >> 16 & 1);
                    const ee = O[15] >> 16 & 1;
                    O[14] &= 65535, ie(o, O, 1 - ee)
                }
                for (let w = 0; w < 16; w++) F[2 * w] = 255 & o[w], F[2 * w + 1] = o[w] >> 8
            }

            function Se(F) {
                const C = new Uint8Array(32);
                return ge(C, F), 1 & C[0]
            }

            function ue(F, C, O) {
                for (let o = 0; o < 16; o++) F[o] = C[o] + O[o]
            }

            function Z(F, C, O) {
                for (let o = 0; o < 16; o++) F[o] = C[o] - O[o]
            }

            function B(F, C, O) {
                let o, w, ee = 0,
                    ne = 0,
                    le = 0,
                    me = 0,
                    de = 0,
                    pe = 0,
                    Ge = 0,
                    We = 0,
                    qe = 0,
                    Oe = 0,
                    Fe = 0,
                    be = 0,
                    Pe = 0,
                    m = 0,
                    _e = 0,
                    ve = 0,
                    k = 0,
                    ke = 0,
                    et = 0,
                    tt = 0,
                    nt = 0,
                    ct = 0,
                    ut = 0,
                    ht = 0,
                    pt = 0,
                    mt = 0,
                    vt = 0,
                    Et = 0,
                    wt = 0,
                    It = 0,
                    Rt = 0,
                    Ce = O[0],
                    Le = O[1],
                    Ze = O[2],
                    Me = O[3],
                    je = O[4],
                    Ne = O[5],
                    ze = O[6],
                    we = O[7],
                    xe = O[8],
                    Je = O[9],
                    Ve = O[10],
                    ae = O[11],
                    Ke = O[12],
                    Be = O[13],
                    $e = O[14],
                    He = O[15];
                o = C[0], ee += o * Ce, ne += o * Le, le += o * Ze, me += o * Me, de += o * je, pe += o * Ne, Ge += o * ze, We += o * we, qe += o * xe, Oe += o * Je, Fe += o * Ve, be += o * ae, Pe += o * Ke, m += o * Be, _e += o * $e, ve += o * He, o = C[1], ne += o * Ce, le += o * Le, me += o * Ze, de += o * Me, pe += o * je, Ge += o * Ne, We += o * ze, qe += o * we, Oe += o * xe, Fe += o * Je, be += o * Ve, Pe += o * ae, m += o * Ke, _e += o * Be, ve += o * $e, k += o * He, o = C[2], le += o * Ce, me += o * Le, de += o * Ze, pe += o * Me, Ge += o * je, We += o * Ne, qe += o * ze, Oe += o * we, Fe += o * xe, be += o * Je, Pe += o * Ve, m += o * ae, _e += o * Ke, ve += o * Be, k += o * $e, ke += o * He, o = C[3], me += o * Ce, de += o * Le, pe += o * Ze, Ge += o * Me, We += o * je, qe += o * Ne, Oe += o * ze, Fe += o * we, be += o * xe, Pe += o * Je, m += o * Ve, _e += o * ae, ve += o * Ke, k += o * Be, ke += o * $e, et += o * He, o = C[4], de += o * Ce, pe += o * Le, Ge += o * Ze, We += o * Me, qe += o * je, Oe += o * Ne, Fe += o * ze, be += o * we, Pe += o * xe, m += o * Je, _e += o * Ve, ve += o * ae, k += o * Ke, ke += o * Be, et += o * $e, tt += o * He, o = C[5], pe += o * Ce, Ge += o * Le, We += o * Ze, qe += o * Me, Oe += o * je, Fe += o * Ne, be += o * ze, Pe += o * we, m += o * xe, _e += o * Je, ve += o * Ve, k += o * ae, ke += o * Ke, et += o * Be, tt += o * $e, nt += o * He, o = C[6], Ge += o * Ce, We += o * Le, qe += o * Ze, Oe += o * Me, Fe += o * je, be += o * Ne, Pe += o * ze, m += o * we, _e += o * xe, ve += o * Je, k += o * Ve, ke += o * ae, et += o * Ke, tt += o * Be, nt += o * $e, ct += o * He, o = C[7], We += o * Ce, qe += o * Le, Oe += o * Ze, Fe += o * Me, be += o * je, Pe += o * Ne, m += o * ze, _e += o * we, ve += o * xe, k += o * Je, ke += o * Ve, et += o * ae, tt += o * Ke, nt += o * Be, ct += o * $e, ut += o * He, o = C[8], qe += o * Ce, Oe += o * Le, Fe += o * Ze, be += o * Me, Pe += o * je, m += o * Ne, _e += o * ze, ve += o * we, k += o * xe, ke += o * Je, et += o * Ve, tt += o * ae, nt += o * Ke, ct += o * Be, ut += o * $e, ht += o * He, o = C[9], Oe += o * Ce, Fe += o * Le, be += o * Ze, Pe += o * Me, m += o * je, _e += o * Ne, ve += o * ze, k += o * we, ke += o * xe, et += o * Je, tt += o * Ve, nt += o * ae, ct += o * Ke, ut += o * Be, ht += o * $e, pt += o * He, o = C[10], Fe += o * Ce, be += o * Le, Pe += o * Ze, m += o * Me, _e += o * je, ve += o * Ne, k += o * ze, ke += o * we, et += o * xe, tt += o * Je, nt += o * Ve, ct += o * ae, ut += o * Ke, ht += o * Be, pt += o * $e, mt += o * He, o = C[11], be += o * Ce, Pe += o * Le, m += o * Ze, _e += o * Me, ve += o * je, k += o * Ne, ke += o * ze, et += o * we, tt += o * xe, nt += o * Je, ct += o * Ve, ut += o * ae, ht += o * Ke, pt += o * Be, mt += o * $e, vt += o * He, o = C[12], Pe += o * Ce, m += o * Le, _e += o * Ze, ve += o * Me, k += o * je, ke += o * Ne, et += o * ze, tt += o * we, nt += o * xe, ct += o * Je, ut += o * Ve, ht += o * ae, pt += o * Ke, mt += o * Be, vt += o * $e, Et += o * He, o = C[13], m += o * Ce, _e += o * Le, ve += o * Ze, k += o * Me, ke += o * je, et += o * Ne, tt += o * ze, nt += o * we, ct += o * xe, ut += o * Je, ht += o * Ve, pt += o * ae, mt += o * Ke, vt += o * Be, Et += o * $e, wt += o * He, o = C[14], _e += o * Ce, ve += o * Le, k += o * Ze, ke += o * Me, et += o * je, tt += o * Ne, nt += o * ze, ct += o * we, ut += o * xe, ht += o * Je, pt += o * Ve, mt += o * ae, vt += o * Ke, Et += o * Be, wt += o * $e, It += o * He, o = C[15], ve += o * Ce, k += o * Le, ke += o * Ze, et += o * Me, tt += o * je, nt += o * Ne, ct += o * ze, ut += o * we, ht += o * xe, pt += o * Je, mt += o * Ve, vt += o * ae, Et += o * Ke, wt += o * Be, It += o * $e, Rt += o * He, ee += 38 * k, ne += 38 * ke, le += 38 * et, me += 38 * tt, de += 38 * nt, pe += 38 * ct, Ge += 38 * ut, We += 38 * ht, qe += 38 * pt, Oe += 38 * mt, Fe += 38 * vt, be += 38 * Et, Pe += 38 * wt, m += 38 * It, _e += 38 * Rt, w = 1, o = ee + w + 65535, w = Math.floor(o / 65536), ee = o - 65536 * w, o = ne + w + 65535, w = Math.floor(o / 65536), ne = o - 65536 * w, o = le + w + 65535, w = Math.floor(o / 65536), le = o - 65536 * w, o = me + w + 65535, w = Math.floor(o / 65536), me = o - 65536 * w, o = de + w + 65535, w = Math.floor(o / 65536), de = o - 65536 * w, o = pe + w + 65535, w = Math.floor(o / 65536), pe = o - 65536 * w, o = Ge + w + 65535, w = Math.floor(o / 65536), Ge = o - 65536 * w, o = We + w + 65535, w = Math.floor(o / 65536), We = o - 65536 * w, o = qe + w + 65535, w = Math.floor(o / 65536), qe = o - 65536 * w, o = Oe + w + 65535, w = Math.floor(o / 65536), Oe = o - 65536 * w, o = Fe + w + 65535, w = Math.floor(o / 65536), Fe = o - 65536 * w, o = be + w + 65535, w = Math.floor(o / 65536), be = o - 65536 * w, o = Pe + w + 65535, w = Math.floor(o / 65536), Pe = o - 65536 * w, o = m + w + 65535, w = Math.floor(o / 65536), m = o - 65536 * w, o = _e + w + 65535, w = Math.floor(o / 65536), _e = o - 65536 * w, o = ve + w + 65535, w = Math.floor(o / 65536), ve = o - 65536 * w, ee += w - 1 + 37 * (w - 1), w = 1, o = ee + w + 65535, w = Math.floor(o / 65536), ee = o - 65536 * w, o = ne + w + 65535, w = Math.floor(o / 65536), ne = o - 65536 * w, o = le + w + 65535, w = Math.floor(o / 65536), le = o - 65536 * w, o = me + w + 65535, w = Math.floor(o / 65536), me = o - 65536 * w, o = de + w + 65535, w = Math.floor(o / 65536), de = o - 65536 * w, o = pe + w + 65535, w = Math.floor(o / 65536), pe = o - 65536 * w, o = Ge + w + 65535, w = Math.floor(o / 65536), Ge = o - 65536 * w, o = We + w + 65535, w = Math.floor(o / 65536), We = o - 65536 * w, o = qe + w + 65535, w = Math.floor(o / 65536), qe = o - 65536 * w, o = Oe + w + 65535, w = Math.floor(o / 65536), Oe = o - 65536 * w, o = Fe + w + 65535, w = Math.floor(o / 65536), Fe = o - 65536 * w, o = be + w + 65535, w = Math.floor(o / 65536), be = o - 65536 * w, o = Pe + w + 65535, w = Math.floor(o / 65536), Pe = o - 65536 * w, o = m + w + 65535, w = Math.floor(o / 65536), m = o - 65536 * w, o = _e + w + 65535, w = Math.floor(o / 65536), _e = o - 65536 * w, o = ve + w + 65535, w = Math.floor(o / 65536), ve = o - 65536 * w, ee += w - 1 + 37 * (w - 1), F[0] = ee, F[1] = ne, F[2] = le, F[3] = me, F[4] = de, F[5] = pe, F[6] = Ge, F[7] = We, F[8] = qe, F[9] = Oe, F[10] = Fe, F[11] = be, F[12] = Pe, F[13] = m, F[14] = _e, F[15] = ve
            }

            function u(F, C) {
                B(F, C, C)
            }

            function p(F, C) {
                const O = D(),
                    o = D(),
                    w = D(),
                    ee = D(),
                    ne = D(),
                    le = D(),
                    me = D(),
                    de = D(),
                    pe = D();
                Z(O, F[1], F[0]), Z(pe, C[1], C[0]), B(O, O, pe), ue(o, F[0], F[1]), ue(pe, C[0], C[1]), B(o, o, pe), B(w, F[3], C[3]), B(w, w, L), B(ee, F[2], C[2]), ue(ee, ee, ee), Z(ne, o, O), Z(le, ee, w), ue(me, ee, w), ue(de, o, O), B(F[0], ne, le), B(F[1], de, me), B(F[2], me, le), B(F[3], ne, de)
            }

            function _(F, C, O) {
                for (let o = 0; o < 4; o++) ie(F[o], C[o], O)
            }

            function l(F, C) {
                const O = D(),
                    o = D(),
                    w = D();
                (function h(F, C) {
                    const O = D();
                    let o;
                    for (o = 0; o < 16; o++) O[o] = C[o];
                    for (o = 253; o >= 0; o--) u(O, O), 2 !== o && 4 !== o && B(O, O, C);
                    for (o = 0; o < 16; o++) F[o] = O[o]
                })(w, C[2]), B(O, C[0], w), B(o, C[1], w), ge(F, o), F[31] ^= Se(O) << 7
            }

            function N(F, C) {
                const O = [D(), D(), D(), D()];
                H(O[0], X), H(O[1], W), H(O[2], S), B(O[3], X, W),
                    function g(F, C, O) {
                        H(F[0], $), H(F[1], S), H(F[2], S), H(F[3], $);
                        for (let o = 255; o >= 0; --o) {
                            const w = O[o / 8 | 0] >> (7 & o) & 1;
                            _(F, C, w), p(C, F), p(F, F), _(F, C, w)
                        }
                    }(F, O, C)
            }
            E._w = function G(F) {
                if (F.length !== E.aP) throw new Error(`ed25519: seed must be ${E.aP} bytes`);
                const C = (0, z.hash)(F);
                C[0] &= 248, C[31] &= 127, C[31] |= 64;
                const O = new Uint8Array(32),
                    o = [D(), D(), D(), D()];
                N(o, C), l(O, o);
                const w = new Uint8Array(64);
                return w.set(F), w.set(O, 32), {
                    publicKey: O,
                    secretKey: w
                }
            };
            const M = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function P(F, C) {
                let O, o, w, ee;
                for (o = 63; o >= 32; --o) {
                    for (O = 0, w = o - 32, ee = o - 12; w < ee; ++w) C[w] += O - 16 * C[o] * M[w - (o - 32)], O = Math.floor((C[w] + 128) / 256), C[w] -= 256 * O;
                    C[w] += O, C[o] = 0
                }
                for (O = 0, w = 0; w < 32; w++) C[w] += O - (C[31] >> 4) * M[w], O = C[w] >> 8, C[w] &= 255;
                for (w = 0; w < 32; w++) C[w] -= O * M[w];
                for (o = 0; o < 32; o++) C[o + 1] += C[o] >> 8, F[o] = 255 & C[o]
            }

            function Q(F) {
                const C = new Float64Array(64);
                for (let O = 0; O < 64; O++) C[O] = F[O];
                for (let O = 0; O < 64; O++) F[O] = 0;
                P(F, C)
            }
            E.Xx = function se(F, C) {
                const O = new Float64Array(64),
                    o = [D(), D(), D(), D()],
                    w = (0, z.hash)(F.subarray(0, 32));
                w[0] &= 248, w[31] &= 127, w[31] |= 64;
                const ee = new Uint8Array(64);
                ee.set(w.subarray(32), 32);
                const ne = new z.SHA512;
                ne.update(ee.subarray(32)), ne.update(C);
                const le = ne.digest();
                ne.clean(), Q(le), N(o, le), l(ee, o), ne.reset(), ne.update(ee.subarray(0, 32)), ne.update(F.subarray(32)), ne.update(C);
                const me = ne.digest();
                Q(me);
                for (let de = 0; de < 32; de++) O[de] = le[de];
                for (let de = 0; de < 32; de++)
                    for (let pe = 0; pe < 32; pe++) O[de + pe] += me[de] * w[pe];
                return P(ee.subarray(32), O), ee
            }
        },
        56713: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            });
            var f = x(99546),
                j = x(43403);
            E.DIGEST_LENGTH = 64, E.BLOCK_SIZE = 128;
            var z = function() {
                function $() {
                    this.digestLength = E.DIGEST_LENGTH, this.blockSize = E.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return $.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, $.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, $.prototype.clean = function() {
                    j.wipe(this._buffer), j.wipe(this._tempHi), j.wipe(this._tempLo), this.reset()
                }, $.prototype.update = function(S, I) {
                    if (void 0 === I && (I = S.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var L = 0;
                    if (this._bytesHashed += I, this._bufferLength > 0) {
                        for (; this._bufferLength < E.BLOCK_SIZE && I > 0;) this._buffer[this._bufferLength++] = S[L++], I--;
                        this._bufferLength === this.blockSize && (D(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (I >= this.blockSize && (L = D(this._tempHi, this._tempLo, this._stateHi, this._stateLo, S, L, I), I %= this.blockSize); I > 0;) this._buffer[this._bufferLength++] = S[L++], I--;
                    return this
                }, $.prototype.finish = function(S) {
                    if (!this._finished) {
                        var I = this._bytesHashed,
                            L = this._bufferLength,
                            X = I / 536870912 | 0,
                            W = I << 3,
                            oe = I % 128 < 112 ? 128 : 256;
                        this._buffer[L] = 128;
                        for (var H = L + 1; H < oe - 8; H++) this._buffer[H] = 0;
                        f.writeUint32BE(X, this._buffer, oe - 8), f.writeUint32BE(W, this._buffer, oe - 4), D(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, oe), this._finished = !0
                    }
                    for (H = 0; H < this.digestLength / 8; H++) f.writeUint32BE(this._stateHi[H], S, 8 * H), f.writeUint32BE(this._stateLo[H], S, 8 * H + 4);
                    return this
                }, $.prototype.digest = function() {
                    var S = new Uint8Array(this.digestLength);
                    return this.finish(S), S
                }, $.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, $.prototype.restoreState = function(S) {
                    return this._stateHi.set(S.stateHi), this._stateLo.set(S.stateLo), this._bufferLength = S.bufferLength, S.buffer && this._buffer.set(S.buffer), this._bytesHashed = S.bytesHashed, this._finished = !1, this
                }, $.prototype.cleanSavedState = function(S) {
                    j.wipe(S.stateHi), j.wipe(S.stateLo), S.buffer && j.wipe(S.buffer), S.bufferLength = 0, S.bytesHashed = 0
                }, $
            }();
            E.SHA512 = z;
            var q = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function D($, S, I, L, X, W, oe) {
                for (var l, g, N, G, b, A, M, P, H = I[0], he = I[1], ie = I[2], ge = I[3], fe = I[4], Re = I[5], Se = I[6], Ae = I[7], ue = L[0], Z = L[1], B = L[2], u = L[3], h = L[4], d = L[5], p = L[6], _ = L[7]; oe >= 128;) {
                    for (var Q = 0; Q < 16; Q++) $[Q] = f.readUint32BE(X, se = 8 * Q + W), S[Q] = f.readUint32BE(X, se + 4);
                    for (Q = 0; Q < 80; Q++) {
                        var o, Ge, xt = he,
                            _t = ie,
                            Qe = ge,
                            F = fe,
                            C = Re,
                            O = Se,
                            ee = Z,
                            ne = B,
                            le = u,
                            me = h,
                            de = d,
                            pe = p;
                        if (b = 65535 & (g = _), A = g >>> 16, M = 65535 & (l = Ae), P = l >>> 16, b += 65535 & (g = (h >>> 14 | fe << 18) ^ (h >>> 18 | fe << 14) ^ (fe >>> 9 | h << 23)), A += g >>> 16, M += 65535 & (l = (fe >>> 14 | h << 18) ^ (fe >>> 18 | h << 14) ^ (h >>> 9 | fe << 23)), P += l >>> 16, b += 65535 & (g = h & d ^ ~h & p), A += g >>> 16, M += 65535 & (l = fe & Re ^ ~fe & Se), P += l >>> 16, b += 65535 & (g = q[2 * Q + 1]), A += g >>> 16, M += 65535 & (l = q[2 * Q]), P += l >>> 16, A += (g = S[Q % 16]) >>> 16, M += 65535 & (l = $[Q % 16]), P += l >>> 16, M += (A += (b += 65535 & g) >>> 16) >>> 16, b = 65535 & (g = G = 65535 & b | A << 16), A = g >>> 16, M = 65535 & (l = N = 65535 & M | (P += M >>> 16) << 16), P = l >>> 16, b += 65535 & (g = (ue >>> 28 | H << 4) ^ (H >>> 2 | ue << 30) ^ (H >>> 7 | ue << 25)), A += g >>> 16, M += 65535 & (l = (H >>> 28 | ue << 4) ^ (ue >>> 2 | H << 30) ^ (ue >>> 7 | H << 25)), P += l >>> 16, A += (g = ue & Z ^ ue & B ^ Z & B) >>> 16, M += 65535 & (l = H & he ^ H & ie ^ he & ie), P += l >>> 16, o = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, Ge = 65535 & b | A << 16, b = 65535 & (g = le), A = g >>> 16, M = 65535 & (l = Qe), P = l >>> 16, A += (g = G) >>> 16, M += 65535 & (l = N), P += l >>> 16, he = H, ie = xt, ge = _t, fe = Qe = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, Re = F, Se = C, Ae = O, H = o, Z = ue, B = ee, u = ne, h = le = 65535 & b | A << 16, d = me, p = de, _ = pe, ue = Ge, Q % 16 == 15)
                            for (var se = 0; se < 16; se++) b = 65535 & (g = S[se]), A = g >>> 16, M = 65535 & (l = $[se]), P = l >>> 16, b += 65535 & (g = S[(se + 9) % 16]), A += g >>> 16, M += 65535 & (l = $[(se + 9) % 16]), P += l >>> 16, b += 65535 & (g = ((G = S[(se + 1) % 16]) >>> 1 | (N = $[(se + 1) % 16]) << 31) ^ (G >>> 8 | N << 24) ^ (G >>> 7 | N << 25)), A += g >>> 16, M += 65535 & (l = (N >>> 1 | G << 31) ^ (N >>> 8 | G << 24) ^ N >>> 7), P += l >>> 16, A += (g = ((G = S[(se + 14) % 16]) >>> 19 | (N = $[(se + 14) % 16]) << 13) ^ (N >>> 29 | G << 3) ^ (G >>> 6 | N << 26)) >>> 16, M += 65535 & (l = (N >>> 19 | G << 13) ^ (G >>> 29 | N << 3) ^ N >>> 6), P += l >>> 16, $[se] = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, S[se] = 65535 & b | A << 16
                    }
                    b = 65535 & (g = ue), A = g >>> 16, M = 65535 & (l = H), P = l >>> 16, A += (g = L[0]) >>> 16, M += 65535 & (l = I[0]), P += l >>> 16, I[0] = H = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[0] = ue = 65535 & b | A << 16, b = 65535 & (g = Z), A = g >>> 16, M = 65535 & (l = he), P = l >>> 16, A += (g = L[1]) >>> 16, M += 65535 & (l = I[1]), P += l >>> 16, I[1] = he = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[1] = Z = 65535 & b | A << 16, b = 65535 & (g = B), A = g >>> 16, M = 65535 & (l = ie), P = l >>> 16, A += (g = L[2]) >>> 16, M += 65535 & (l = I[2]), P += l >>> 16, I[2] = ie = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[2] = B = 65535 & b | A << 16, b = 65535 & (g = u), A = g >>> 16, M = 65535 & (l = ge), P = l >>> 16, A += (g = L[3]) >>> 16, M += 65535 & (l = I[3]), P += l >>> 16, I[3] = ge = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[3] = u = 65535 & b | A << 16, b = 65535 & (g = h), A = g >>> 16, M = 65535 & (l = fe), P = l >>> 16, A += (g = L[4]) >>> 16, M += 65535 & (l = I[4]), P += l >>> 16, I[4] = fe = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[4] = h = 65535 & b | A << 16, b = 65535 & (g = d), A = g >>> 16, M = 65535 & (l = Re), P = l >>> 16, A += (g = L[5]) >>> 16, M += 65535 & (l = I[5]), P += l >>> 16, I[5] = Re = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[5] = d = 65535 & b | A << 16, b = 65535 & (g = p), A = g >>> 16, M = 65535 & (l = Se), P = l >>> 16, A += (g = L[6]) >>> 16, M += 65535 & (l = I[6]), P += l >>> 16, I[6] = Se = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[6] = p = 65535 & b | A << 16, b = 65535 & (g = _), A = g >>> 16, M = 65535 & (l = Ae), P = l >>> 16, A += (g = L[7]) >>> 16, M += 65535 & (l = I[7]), P += l >>> 16, I[7] = Ae = 65535 & (M += (A += (b += 65535 & g) >>> 16) >>> 16) | (P += M >>> 16) << 16, L[7] = _ = 65535 & b | A << 16, W += 128, oe -= 128
                }
                return W
            }
            E.hash = function K($) {
                var S = new z;
                S.update($);
                var I = S.digest();
                return S.clean(), I
            }
        },
        7263: (te, E) => {
            "use strict";

            function x() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function f() {
                const z = x();
                return z.subtle || z.webkitSubtle
            }
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.isBrowserCryptoAvailable = E.getSubtleCrypto = E.getBrowerCrypto = void 0, E.getBrowerCrypto = x, E.getSubtleCrypto = f, E.isBrowserCryptoAvailable = function j() {
                return !!x() && !!f()
            }
        },
        24574: (te, E) => {
            "use strict";

            function x() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function f() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.isBrowser = E.isNode = E.isReactNative = void 0, E.isReactNative = x, E.isNode = f, E.isBrowser = function j() {
                return !x() && !f()
            }
        },
        92299: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            });
            const f = x(34308);
            f.__exportStar(x(7263), E), f.__exportStar(x(24574), E)
        },
        62108: (te, E, x) => {
            "use strict";
            x.d(E, {
                q: () => f
            });
            class f {}
        },
        70699: (te, E, x) => {
            "use strict";
            x.r(E), x.d(E, {
                IEvents: () => f.q
            });
            var f = x(62108)
        },
        94953: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.HEARTBEAT_EVENTS = E.HEARTBEAT_INTERVAL = void 0;
            const f = x(35409);
            E.HEARTBEAT_INTERVAL = f.FIVE_SECONDS, E.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        85368: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), x(61116).__exportStar(x(94953), E)
        },
        69754: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.HeartBeat = void 0;
            const f = x(61116),
                j = x(82016),
                z = x(35409),
                q = x(14083),
                D = x(85368);
            class K extends q.IHeartBeat {
                constructor(S) {
                    super(S), this.events = new j.EventEmitter, this.interval = D.HEARTBEAT_INTERVAL, this.interval = S ? .interval || D.HEARTBEAT_INTERVAL
                }
                static init(S) {
                    return f.__awaiter(this, void 0, void 0, function*() {
                        const I = new K(S);
                        return yield I.init(), I
                    })
                }
                init() {
                    return f.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(S, I) {
                    this.events.on(S, I)
                }
                once(S, I) {
                    this.events.once(S, I)
                }
                off(S, I) {
                    this.events.off(S, I)
                }
                removeListener(S, I) {
                    this.events.removeListener(S, I)
                }
                initialize() {
                    return f.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), z.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(D.HEARTBEAT_EVENTS.pulse)
                }
            }
            E.HeartBeat = K
        },
        80986: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            });
            const f = x(61116);
            f.__exportStar(x(69754), E), f.__exportStar(x(14083), E), f.__exportStar(x(85368), E)
        },
        37293: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.IHeartBeat = void 0;
            const f = x(70699);
            E.IHeartBeat = class j extends f.IEvents {
                constructor(q) {
                    super()
                }
            }
        },
        14083: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), x(61116).__exportStar(x(37293), E)
        },
        11474: (te, E, x) => {
            "use strict";
            x.d(E, {
                r: () => q
            });
            var f = x(49671),
                j = x(82016),
                z = x(26446);
            class q extends z.IJsonRpcProvider {
                constructor(S) {
                    super(S), this.events = new j.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(S), this.connection.connected && this.registerEventListeners()
                }
                connect(S = this.connection) {
                    var I = this;
                    return (0, f.Z)(function*() {
                        yield I.open(S)
                    })()
                }
                disconnect() {
                    var S = this;
                    return (0, f.Z)(function*() {
                        yield S.close()
                    })()
                }
                on(S, I) {
                    this.events.on(S, I)
                }
                once(S, I) {
                    this.events.once(S, I)
                }
                off(S, I) {
                    this.events.off(S, I)
                }
                removeListener(S, I) {
                    this.events.removeListener(S, I)
                }
                request(S, I) {
                    var L = this;
                    return (0, f.Z)(function*() {
                        return L.requestStrict((0, z.formatJsonRpcRequest)(S.method, S.params || [], S.id || (0, z.getBigIntRpcId)().toString()), I)
                    })()
                }
                requestStrict(S, I) {
                    var L = this;
                    return (0, f.Z)(function*() {
                        return new Promise(function() {
                            var X = (0, f.Z)(function*(W, oe) {
                                if (!L.connection.connected) try {
                                    yield L.open()
                                } catch (H) {
                                    oe(H)
                                }
                                L.events.on(`${S.id}`, H => {
                                    (0, z.isJsonRpcError)(H) ? oe(H.error): W(H.result)
                                });
                                try {
                                    yield L.connection.send(S, I)
                                } catch (H) {
                                    oe(H)
                                }
                            });
                            return function(W, oe) {
                                return X.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(S = this.connection) {
                    return S
                }
                onPayload(S) {
                    this.events.emit("payload", S), (0, z.isJsonRpcResponse)(S) ? this.events.emit(`${S.id}`, S) : this.events.emit("message", {
                        type: S.method,
                        data: S.params
                    })
                }
                onClose(S) {
                    S && 3e3 === S.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${S.code} ${S.reason?`(${S.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(S = this.connection) {
                    var I = this;
                    return (0, f.Z)(function*() {
                        I.connection === S && I.connection.connected || (I.connection.connected && I.close(), "string" == typeof S && (yield I.connection.open(S), S = I.connection), I.connection = I.setConnection(S), yield I.connection.open(), I.registerEventListeners(), I.events.emit("connect"))
                    })()
                }
                close() {
                    var S = this;
                    return (0, f.Z)(function*() {
                        yield S.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", S => this.onPayload(S)), this.connection.on("close", S => this.onClose(S)), this.connection.on("error", S => this.events.emit("error", S)), this.connection.on("register_error", S => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        44087: (te, E, x) => {
            "use strict";
            x.d(E, {
                CA: () => K,
                JV: () => L,
                O4: () => D,
                dQ: () => $,
                xK: () => I
            });
            const D = "INTERNAL_ERROR",
                K = "SERVER_ERROR",
                $ = [-32700, -32600, -32601, -32602, -32603],
                I = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [D]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [K]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                L = K
        },
        58102: (te, E, x) => {
            "use strict";
            var f = x(92299);
            x.o(f, "IJsonRpcProvider") && x.d(E, {
                IJsonRpcProvider: function() {
                    return f.IJsonRpcProvider
                }
            }), x.o(f, "formatJsonRpcError") && x.d(E, {
                formatJsonRpcError: function() {
                    return f.formatJsonRpcError
                }
            }), x.o(f, "formatJsonRpcRequest") && x.d(E, {
                formatJsonRpcRequest: function() {
                    return f.formatJsonRpcRequest
                }
            }), x.o(f, "formatJsonRpcResult") && x.d(E, {
                formatJsonRpcResult: function() {
                    return f.formatJsonRpcResult
                }
            }), x.o(f, "getBigIntRpcId") && x.d(E, {
                getBigIntRpcId: function() {
                    return f.getBigIntRpcId
                }
            }), x.o(f, "isHttpUrl") && x.d(E, {
                isHttpUrl: function() {
                    return f.isHttpUrl
                }
            }), x.o(f, "isJsonRpcError") && x.d(E, {
                isJsonRpcError: function() {
                    return f.isJsonRpcError
                }
            }), x.o(f, "isJsonRpcRequest") && x.d(E, {
                isJsonRpcRequest: function() {
                    return f.isJsonRpcRequest
                }
            }), x.o(f, "isJsonRpcResponse") && x.d(E, {
                isJsonRpcResponse: function() {
                    return f.isJsonRpcResponse
                }
            }), x.o(f, "isJsonRpcResult") && x.d(E, {
                isJsonRpcResult: function() {
                    return f.isJsonRpcResult
                }
            }), x.o(f, "isLocalhostUrl") && x.d(E, {
                isLocalhostUrl: function() {
                    return f.isLocalhostUrl
                }
            }), x.o(f, "isReactNative") && x.d(E, {
                isReactNative: function() {
                    return f.isReactNative
                }
            }), x.o(f, "isWsUrl") && x.d(E, {
                isWsUrl: function() {
                    return f.isWsUrl
                }
            })
        },
        49187: (te, E, x) => {
            "use strict";
            x.d(E, {
                CX: () => S,
                L2: () => K,
                by: () => D,
                i5: () => z
            });
            var f = x(44087);

            function z(I) {
                return f.dQ.includes(I)
            }

            function D(I) {
                return Object.keys(f.xK).includes(I) ? f.xK[I] : f.xK[f.JV]
            }

            function K(I) {
                return Object.values(f.xK).find(X => X.code === I) || f.xK[f.JV]
            }

            function S(I, L, X) {
                return I.message.includes("getaddrinfo ENOTFOUND") || I.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${X} RPC url at ${L}`) : I
            }
        },
        16749: (te, E, x) => {
            "use strict";
            x.d(E, {
                CS: () => q,
                RI: () => $,
                sT: () => D,
                tm: () => K
            });
            var f = x(49187),
                j = x(44087);

            function z(I = 3) {
                return Date.now() * Math.pow(10, I) + Math.floor(Math.random() * Math.pow(10, I))
            }

            function q(I = 6) {
                return BigInt(z(I))
            }

            function D(I, L, X) {
                return {
                    id: X || z(),
                    jsonrpc: "2.0",
                    method: I,
                    params: L
                }
            }

            function K(I, L) {
                return {
                    id: I,
                    jsonrpc: "2.0",
                    result: L
                }
            }

            function $(I, L, X) {
                return {
                    id: I,
                    jsonrpc: "2.0",
                    error: S(L, X)
                }
            }

            function S(I, L) {
                return typeof I > "u" ? (0, f.by)(j.O4) : ("string" == typeof I && (I = Object.assign(Object.assign({}, (0, f.by)(j.CA)), {
                    message: I
                })), typeof L < "u" && (I.data = L), (0, f.i5)(I.code) && (I = (0, f.L2)(I.code)), I)
            }
        },
        26446: (te, E, x) => {
            "use strict";
            x.d(E, {
                IJsonRpcProvider: () => D.x0,
                formatJsonRpcError: () => q.RI,
                formatJsonRpcRequest: () => q.sT,
                formatJsonRpcResult: () => q.tm,
                getBigIntRpcId: () => q.CS,
                isHttpUrl: () => K.jK,
                isJsonRpcError: () => $.jg,
                isJsonRpcRequest: () => $.DW,
                isJsonRpcResponse: () => $.u,
                isJsonRpcResult: () => $.k4,
                isLocalhostUrl: () => K.JF,
                isWsUrl: () => K.UZ,
                parseConnectionError: () => j.CX
            }), x(44087);
            var j = x(49187),
                z = x(58102);
            x.o(z, "IJsonRpcProvider") && x.d(E, {
                IJsonRpcProvider: function() {
                    return z.IJsonRpcProvider
                }
            }), x.o(z, "formatJsonRpcError") && x.d(E, {
                formatJsonRpcError: function() {
                    return z.formatJsonRpcError
                }
            }), x.o(z, "formatJsonRpcRequest") && x.d(E, {
                formatJsonRpcRequest: function() {
                    return z.formatJsonRpcRequest
                }
            }), x.o(z, "formatJsonRpcResult") && x.d(E, {
                formatJsonRpcResult: function() {
                    return z.formatJsonRpcResult
                }
            }), x.o(z, "getBigIntRpcId") && x.d(E, {
                getBigIntRpcId: function() {
                    return z.getBigIntRpcId
                }
            }), x.o(z, "isHttpUrl") && x.d(E, {
                isHttpUrl: function() {
                    return z.isHttpUrl
                }
            }), x.o(z, "isJsonRpcError") && x.d(E, {
                isJsonRpcError: function() {
                    return z.isJsonRpcError
                }
            }), x.o(z, "isJsonRpcRequest") && x.d(E, {
                isJsonRpcRequest: function() {
                    return z.isJsonRpcRequest
                }
            }), x.o(z, "isJsonRpcResponse") && x.d(E, {
                isJsonRpcResponse: function() {
                    return z.isJsonRpcResponse
                }
            }), x.o(z, "isJsonRpcResult") && x.d(E, {
                isJsonRpcResult: function() {
                    return z.isJsonRpcResult
                }
            }), x.o(z, "isLocalhostUrl") && x.d(E, {
                isLocalhostUrl: function() {
                    return z.isLocalhostUrl
                }
            }), x.o(z, "isReactNative") && x.d(E, {
                isReactNative: function() {
                    return z.isReactNative
                }
            }), x.o(z, "isWsUrl") && x.d(E, {
                isWsUrl: function() {
                    return z.isWsUrl
                }
            });
            var q = x(16749),
                D = x(18404),
                K = x(2918),
                $ = x(91924)
        },
        18404: (te, E, x) => {
            "use strict";
            x.d(E, {
                x0: () => q
            });
            class f {}
            class z extends f {
                constructor() {
                    super()
                }
            }
            class q extends z {
                constructor(K) {
                    super()
                }
            }
        },
        2918: (te, E, x) => {
            "use strict";
            x.d(E, {
                JF: () => $,
                UZ: () => K,
                jK: () => D
            });
            const f = "^https?:",
                j = "^wss?:";

            function q(S, I) {
                const L = function z(S) {
                    const I = S.match(new RegExp(/^\w+:/, "gi"));
                    if (I && I.length) return I[0]
                }(S);
                return !(typeof L > "u") && new RegExp(I).test(L)
            }

            function D(S) {
                return q(S, f)
            }

            function K(S) {
                return q(S, j)
            }

            function $(S) {
                return new RegExp("wss?://localhost(:d{2,5})?").test(S)
            }
        },
        91924: (te, E, x) => {
            "use strict";

            function f($) {
                return "object" == typeof $ && "id" in $ && "jsonrpc" in $ && "2.0" === $.jsonrpc
            }

            function j($) {
                return f($) && "method" in $
            }

            function z($) {
                return f($) && (q($) || D($))
            }

            function q($) {
                return "result" in $
            }

            function D($) {
                return "error" in $
            }
            x.d(E, {
                DW: () => j,
                jg: () => D,
                k4: () => q,
                u: () => z
            })
        },
        17297: (te, E, x) => {
            "use strict";
            const j = x(33893),
                z = x(55499),
                q = j.__importDefault(x(52906)),
                D = x(25420);
            E.ZP = class K {
                constructor() {
                    this.localStorage = q.default
                }
                getKeys() {
                    return j.__awaiter(this, void 0, void 0, function*() {
                        return Object.keys(this.localStorage)
                    })
                }
                getEntries() {
                    return j.__awaiter(this, void 0, void 0, function*() {
                        return Object.entries(this.localStorage).map(D.parseEntry)
                    })
                }
                getItem(S) {
                    return j.__awaiter(this, void 0, void 0, function*() {
                        const I = this.localStorage.getItem(S);
                        if (null !== I) return z.safeJsonParse(I)
                    })
                }
                setItem(S, I) {
                    return j.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.setItem(S, z.safeJsonStringify(I))
                    })
                }
                removeItem(S) {
                    return j.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.removeItem(S)
                    })
                }
            }
        },
        52906: te => {
            "use strict";
            ! function() {
                let E;

                function x() {}
                E = x, E.prototype.getItem = function(f) {
                    return this.hasOwnProperty(f) ? String(this[f]) : null
                }, E.prototype.setItem = function(f, j) {
                    this[f] = String(j)
                }, E.prototype.removeItem = function(f) {
                    delete this[f]
                }, E.prototype.clear = function() {
                    const f = this;
                    Object.keys(f).forEach(function(j) {
                        f[j] = void 0, delete f[j]
                    })
                }, E.prototype.key = function(f) {
                    return f = f || 0, Object.keys(this)[f]
                }, E.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), te.exports = typeof global < "u" && global.localStorage ? global.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new x
            }()
        },
        25420: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            });
            const f = x(33893);
            f.__exportStar(x(43680), E), f.__exportStar(x(10362), E)
        },
        43680: (te, E) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.IKeyValueStorage = void 0, E.IKeyValueStorage = class x {}
        },
        10362: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.parseEntry = void 0;
            const f = x(55499);
            E.parseEntry = function j(z) {
                var q;
                return [z[0], f.safeJsonParse(null !== (q = z[1]) && void 0 !== q ? q : "")]
            }
        },
        26904: (te, E) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.PINO_CUSTOM_CONTEXT_KEY = E.PINO_LOGGER_DEFAULTS = void 0, E.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, E.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        72997: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.pino = void 0;
            const f = x(57121),
                j = f.__importDefault(x(71590));
            Object.defineProperty(E, "pino", {
                enumerable: !0,
                get: function() {
                    return j.default
                }
            }), f.__exportStar(x(26904), E), f.__exportStar(x(22723), E)
        },
        22723: (te, E, x) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.generateChildLogger = E.formatChildLoggerContext = E.getLoggerContext = E.setBrowserLoggerContext = E.getBrowserLoggerContext = E.getDefaultLoggerOptions = void 0;
            const f = x(26904);

            function z(S, I = f.PINO_CUSTOM_CONTEXT_KEY) {
                return S[I] || ""
            }

            function q(S, I, L = f.PINO_CUSTOM_CONTEXT_KEY) {
                return S[L] = I, S
            }

            function D(S, I = f.PINO_CUSTOM_CONTEXT_KEY) {
                let L = "";
                return L = typeof S.bindings > "u" ? z(S, I) : S.bindings().context || "", L
            }

            function K(S, I, L = f.PINO_CUSTOM_CONTEXT_KEY) {
                const X = D(S, L);
                return X.trim() ? `${X}/${I}` : I
            }
            E.getDefaultLoggerOptions = function j(S) {
                return Object.assign(Object.assign({}, S), {
                    level: S ? .level || f.PINO_LOGGER_DEFAULTS.level
                })
            }, E.getBrowserLoggerContext = z, E.setBrowserLoggerContext = q, E.getLoggerContext = D, E.formatChildLoggerContext = K, E.generateChildLogger = function $(S, I, L = f.PINO_CUSTOM_CONTEXT_KEY) {
                const X = K(S, I, L);
                return q(S.child({
                    context: X
                }), X, L)
            }
        },
        82768: () => {},
        57630: (te, E, x) => {
            "use strict";
            x.d(E, {
                D: () => z,
                u: () => q
            });
            const f = D => JSON.stringify(D, (K, $) => "bigint" == typeof $ ? $.toString() + "n" : $),
                j = D => {
                    const $ = D.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse($, (S, I) => "string" == typeof I && I.match(/^\d+n$/) ? BigInt(I.substring(0, I.length - 1)) : I)
                };

            function z(D) {
                if ("string" != typeof D) throw new Error("Cannot safe json parse value of type " + typeof D);
                try {
                    return j(D)
                } catch {
                    return D
                }
            }

            function q(D) {
                return "string" == typeof D ? D : f(D) || ""
            }
        },
        54086: (te, E, x) => {
            "use strict";
            x.d(E, {
                lO: () => Rr,
                ZP: () => Bt
            });
            var f = x(49671),
                j = x(82016),
                z = x.n(j),
                q = x(17297),
                D = x(80986),
                K = x(72997),
                $ = x(62108);
            class S extends $.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class L extends $.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class X {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class W extends $.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class oe extends $.q {
                constructor(e) {
                    super()
                }
            }
            class H {
                constructor(e, t, s, r) {
                    this.core = e, this.logger = t, this.name = s
                }
            }
            class ie extends $.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class fe extends $.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class Se {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class ue {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class B {
                constructor(e) {
                    this.client = e
                }
            }
            var u = x(57630),
                h = x(35972),
                d = x(25465),
                p = x(35409);
            const N = "base64url",
                G = "utf8",
                A = ":",
                M = "did",
                P = "key",
                Q = "base58btc",
                se = "z",
                De = "K36";
            var Qe = x(91376),
                F = x(90878),
                C = x(82269);

            function o(v) {
                return (0, F.B)((0, C.m)((0, u.u)(v), G), N)
            }

            function w(v) {
                const e = (0, C.m)(De, Q),
                    t = se + (0, F.B)((0, Qe.z)([e, v]), Q);
                return [M, P, t].join(A)
            }

            function ne(v) {
                return (0, F.B)(v, N)
            }

            function We(v = (0, d.randomBytes)(32)) {
                return h._w(v)
            }

            function Oe() {
                return (Oe = (0, f.Z)(function*(v, e, t, s, r = (0, p.fromMiliseconds)(Date.now())) {
                    const n = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        R = {
                            iss: w(s.publicKey),
                            sub: v,
                            aud: e,
                            iat: r,
                            exp: r + t
                        },
                        T = function me(v) {
                            return (0, C.m)([o(v.header), o(v.payload)].join("."), "utf8")
                        }({
                            header: n,
                            payload: R
                        });
                    return function pe(v) {
                        return [o(v.header), o(v.payload), ne(v.signature)].join(".")
                    }({
                        header: n,
                        payload: R,
                        signature: h.Xx(s.secretKey, T)
                    })
                })).apply(this, arguments)
            }
            x(82768);
            var m = x(64778),
                _e = x(3544),
                ve = x(11474),
                k = x(26446);
            const tt = v => v.split("?")[0],
                ct = typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : x(3569);
            var mt = x(12650),
                vt = x.n(mt);
            const Rt = v => {
                if (v instanceof Uint8Array && "Uint8Array" === v.constructor.name) return v;
                if (v instanceof ArrayBuffer) return new Uint8Array(v);
                if (ArrayBuffer.isView(v)) return new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class Ze {
                constructor(e, t, s) {
                    this.name = e, this.prefix = t, this.baseEncode = s
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class Me {
                constructor(e, t, s) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return Ne(this, e)
                }
            }
            class je {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return Ne(this, e)
                }
                decode(e) {
                    const s = this.decoders[e[0]];
                    if (s) return s.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const Ne = (v, e) => new je({ ...v.decoders || {
                    [v.prefix]: v
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class ze {
                constructor(e, t, s, r) {
                    this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = r, this.encoder = new Ze(e, t, s), this.decoder = new Me(e, t, r)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const we = ({
                    name: v,
                    prefix: e,
                    encode: t,
                    decode: s
                }) => new ze(v, e, t, s),
                xe = ({
                    prefix: v,
                    name: e,
                    alphabet: t
                }) => {
                    const {
                        encode: s,
                        decode: r
                    } = function Et(v, e) {
                        if (v.length >= 255) throw new TypeError("Alphabet too long");
                        for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
                        for (var r = 0; r < v.length; r++) {
                            var n = v.charAt(r),
                                a = n.charCodeAt(0);
                            if (255 !== t[a]) throw new TypeError(n + " is ambiguous");
                            t[a] = r
                        }
                        var y = v.length,
                            R = v.charAt(0),
                            T = Math.log(y) / Math.log(256),
                            V = Math.log(256) / Math.log(y);

                        function ce(re) {
                            if ("string" != typeof re) throw new TypeError("Expected String");
                            if (0 === re.length) return new Uint8Array;
                            var ye = 0;
                            if (" " !== re[ye]) {
                                for (var Te = 0, Xe = 0; re[ye] === R;) Te++, ye++;
                                for (var st = (re.length - ye) * T + 1 >>> 0, it = new Uint8Array(st); re[ye];) {
                                    var ot = t[re.charCodeAt(ye)];
                                    if (255 === ot) return;
                                    for (var rt = 0, at = st - 1;
                                        (0 !== ot || rt < Xe) && -1 !== at; at--, rt++) it[at] = (ot += y * it[at] >>> 0) % 256 >>> 0, ot = ot / 256 >>> 0;
                                    if (0 !== ot) throw new Error("Non-zero carry");
                                    Xe = rt, ye++
                                }
                                if (" " !== re[ye]) {
                                    for (var Ie = st - Xe; Ie !== st && 0 === it[Ie];) Ie++;
                                    for (var dt = new Uint8Array(Te + (st - Ie)), At = Te; Ie !== st;) dt[At++] = it[Ie++];
                                    return dt
                                }
                            }
                        }
                        return {
                            encode: function Y(re) {
                                if (re instanceof Uint8Array || (ArrayBuffer.isView(re) ? re = new Uint8Array(re.buffer, re.byteOffset, re.byteLength) : Array.isArray(re) && (re = Uint8Array.from(re))), !(re instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                                if (0 === re.length) return "";
                                for (var ye = 0, Te = 0, Xe = 0, st = re.length; Xe !== st && 0 === re[Xe];) Xe++, ye++;
                                for (var it = (st - Xe) * V + 1 >>> 0, ot = new Uint8Array(it); Xe !== st;) {
                                    for (var rt = re[Xe], at = 0, Ie = it - 1;
                                        (0 !== rt || at < Te) && -1 !== Ie; Ie--, at++) ot[Ie] = (rt += 256 * ot[Ie] >>> 0) % y >>> 0, rt = rt / y >>> 0;
                                    if (0 !== rt) throw new Error("Non-zero carry");
                                    Te = at, Xe++
                                }
                                for (var dt = it - Te; dt !== it && 0 === ot[dt];) dt++;
                                for (var At = R.repeat(ye); dt < it; ++dt) At += v.charAt(ot[dt]);
                                return At
                            },
                            decodeUnsafe: ce,
                            decode: function Ye(re) {
                                var ye = ce(re);
                                if (ye) return ye;
                                throw new Error(`Non-${e} character`)
                            }
                        }
                    }(t, e);
                    return we({
                        prefix: v,
                        name: e,
                        encode: s,
                        decode: n => Rt(r(n))
                    })
                },
                ae = ({
                    name: v,
                    prefix: e,
                    bitsPerChar: t,
                    alphabet: s
                }) => we({
                    prefix: e,
                    name: v,
                    encode: r => ((v, e, t) => {
                        const s = "=" === e[e.length - 1],
                            r = (1 << t) - 1;
                        let n = "",
                            a = 0,
                            y = 0;
                        for (let R = 0; R < v.length; ++R)
                            for (y = y << 8 | v[R], a += 8; a > t;) a -= t, n += e[r & y >> a];
                        if (a && (n += e[r & y << t - a]), s)
                            for (; n.length * t & 7;) n += "=";
                        return n
                    })(r, s, t),
                    decode: r => ((v, e, t, s) => {
                        const r = {};
                        for (let V = 0; V < e.length; ++V) r[e[V]] = V;
                        let n = v.length;
                        for (;
                            "=" === v[n - 1];) --n;
                        const a = new Uint8Array(n * t / 8 | 0);
                        let y = 0,
                            R = 0,
                            T = 0;
                        for (let V = 0; V < n; ++V) {
                            const Y = r[v[V]];
                            if (void 0 === Y) throw new SyntaxError(`Non-${s} character`);
                            R = R << t | Y, y += t, y >= 8 && (y -= 8, a[T++] = 255 & R >> y)
                        }
                        if (y >= t || 255 & R << 8 - y) throw new SyntaxError("Unexpected end of data");
                        return a
                    })(r, s, t, v)
                }),
                Ke = we({
                    prefix: "\0",
                    name: "identity",
                    encode: v => (v => (new TextDecoder).decode(v))(v),
                    decode: v => (v => (new TextEncoder).encode(v))(v)
                });
            var Be = Object.freeze({
                __proto__: null,
                identity: Ke
            });
            const $e = ae({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var He = Object.freeze({
                __proto__: null,
                base2: $e
            });
            const Pr = ae({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Tr = Object.freeze({
                __proto__: null,
                base8: Pr
            });
            const Dr = xe({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Nr = Object.freeze({
                __proto__: null,
                base10: Dr
            });
            const Ar = ae({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Fr = ae({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var Cr = Object.freeze({
                __proto__: null,
                base16: Ar,
                base16upper: Fr
            });
            const Lr = ae({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Zr = ae({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Mr = ae({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                jr = ae({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Ur = ae({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                zr = ae({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Jr = ae({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                Vr = ae({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Kr = ae({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Br = Object.freeze({
                __proto__: null,
                base32: Lr,
                base32upper: Zr,
                base32pad: Mr,
                base32padupper: jr,
                base32hex: Ur,
                base32hexupper: zr,
                base32hexpad: Jr,
                base32hexpadupper: Vr,
                base32z: Kr
            });
            const $r = xe({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Hr = xe({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Gr = Object.freeze({
                __proto__: null,
                base36: $r,
                base36upper: Hr
            });
            const Wr = xe({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                qr = xe({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var kr = Object.freeze({
                __proto__: null,
                base58btc: Wr,
                base58flickr: qr
            });
            const Yr = ae({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Xr = ae({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Qr = ae({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                en = ae({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var tn = Object.freeze({
                __proto__: null,
                base64: Yr,
                base64pad: Xr,
                base64url: Qr,
                base64urlpad: en
            });
            const $t = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                rn = $t.reduce((v, e, t) => (v[t] = e, v), []),
                nn = $t.reduce((v, e, t) => (v[e.codePointAt(0)] = t, v), []),
                an = we({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function sn(v) {
                        return v.reduce((e, t) => e + rn[t], "")
                    },
                    decode: function on(v) {
                        const e = [];
                        for (const t of v) {
                            const s = nn[t.codePointAt(0)];
                            if (void 0 === s) throw new Error(`Non-base256emoji character: ${t}`);
                            e.push(s)
                        }
                        return new Uint8Array(e)
                    }
                });
            var cn = Object.freeze({
                    __proto__: null,
                    base256emoji: an
                }),
                Ht = 128,
                fn = -128,
                dn = Math.pow(2, 31),
                gn = Math.pow(2, 7),
                yn = Math.pow(2, 14),
                mn = Math.pow(2, 21),
                _n = Math.pow(2, 28),
                vn = Math.pow(2, 35),
                bn = Math.pow(2, 42),
                xn = Math.pow(2, 49),
                En = Math.pow(2, 56),
                wn = Math.pow(2, 63),
                qt_encode = function Gt(v, e, t) {
                    e = e || [];
                    for (var s = t = t || 0; v >= dn;) e[t++] = 255 & v | Ht, v /= 128;
                    for (; v & fn;) e[t++] = 255 & v | Ht, v >>>= 7;
                    return e[t] = 0 | v, Gt.bytes = t - s + 1, e
                },
                qt_encodingLength = function(v) {
                    return v < gn ? 1 : v < yn ? 2 : v < mn ? 3 : v < _n ? 4 : v < vn ? 5 : v < bn ? 6 : v < xn ? 7 : v < En ? 8 : v < wn ? 9 : 10
                };
            const kt = (v, e, t = 0) => (qt_encode(v, e, t), e),
                Yt = v => qt_encodingLength(v),
                Ct = (v, e) => {
                    const t = e.byteLength,
                        s = Yt(v),
                        r = s + Yt(t),
                        n = new Uint8Array(r + t);
                    return kt(v, n, 0), kt(t, n, s), n.set(e, r), new Sn(v, t, e, n)
                };
            class Sn {
                constructor(e, t, s, r) {
                    this.code = e, this.size = t, this.digest = s, this.bytes = r
                }
            }
            const Xt = ({
                name: v,
                code: e,
                encode: t
            }) => new On(v, e, t);
            class On {
                constructor(e, t, s) {
                    this.name = e, this.code = t, this.encode = s
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Ct(this.code, t) : t.then(s => Ct(this.code, s))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const Qt = v => function() {
                    var e = (0, f.Z)(function*(t) {
                        return new Uint8Array(yield crypto.subtle.digest(v, t))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Pn = Xt({
                    name: "sha2-256",
                    code: 18,
                    encode: Qt("SHA-256")
                }),
                Tn = Xt({
                    name: "sha2-512",
                    code: 19,
                    encode: Qt("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Pn,
                sha512: Tn
            });
            const tr = Rt;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: tr,
                    digest: v => Ct(0, tr(v))
                }
            }), new TextEncoder, new TextDecoder;
            const rr = { ...Be,
                ...He,
                ...Tr,
                ...Nr,
                ...Cr,
                ...Br,
                ...Gr,
                ...kr,
                ...tn,
                ...cn
            };

            function nr(v) {
                return null != globalThis.Buffer ? new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : v
            }

            function ir(v, e, t, s) {
                return {
                    name: v,
                    prefix: e,
                    encoder: {
                        name: v,
                        prefix: e,
                        encode: t
                    },
                    decoder: {
                        decode: s
                    }
                }
            }
            const sr = ir("utf8", "u", v => "u" + new TextDecoder("utf8").decode(v), v => (new TextEncoder).encode(v.substring(1))),
                Lt = ir("ascii", "a", v => {
                    let e = "a";
                    for (let t = 0; t < v.length; t++) e += String.fromCharCode(v[t]);
                    return e
                }, v => {
                    const e = function Fn(v = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? nr(globalThis.Buffer.allocUnsafe(v)) : new Uint8Array(v)
                    }((v = v.substring(1)).length);
                    for (let t = 0; t < v.length; t++) e[t] = v.charCodeAt(t);
                    return e
                }),
                Cn = {
                    utf8: sr,
                    "utf-8": sr,
                    hex: rr.base16,
                    latin1: Lt,
                    ascii: Lt,
                    binary: Lt,
                    ...rr
                },
                bt = "wc@2:core:",
                jn = {
                    database: ":memory:"
                },
                ar = "client_ed25519_seed",
                zn = p.ONE_DAY,
                $n = p.SIX_HOURS,
                ur = "wss://relay.walletconnect.com",
                lr = "wss://relay.walletconnect.org",
                kn = p.ONE_SECOND / 2,
                gt_created = "subscription_created",
                gt_deleted = "subscription_deleted",
                ni = 1e3 * p.FIVE_SECONDS,
                Ot = {
                    wc_pairingDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                lt_expired = "expirer_expired",
                Mt = "verify-api",
                fr = "https://verify.walletconnect.com";
            class li {
                constructor(e, t) {
                    var s = this;
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = bt, this.init = (0, f.Z)(function*() {
                        if (!s.initialized) {
                            const r = yield s.getKeyChain();
                            typeof r < "u" && (s.keychain = r), s.initialized = !0
                        }
                    }), this.has = r => (this.isInitialized(), this.keychain.has(r)), this.set = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            s.isInitialized(), s.keychain.set(n, a), yield s.persist()
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.get = r => {
                        this.isInitialized();
                        const n = this.keychain.get(r);
                        if (typeof n > "u") {
                            const {
                                message: a
                            } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${r}`);
                            throw new Error(a)
                        }
                        return n
                    }, this.del = function() {
                        var r = (0, f.Z)(function*(n) {
                            s.isInitialized(), s.keychain.delete(n), yield s.persist()
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, K.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                setKeyChain(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, m.KC)(e))
                    })()
                }
                getKeyChain() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? (0, m.IP)(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setKeyChain(e.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class fi {
                constructor(e, t, s) {
                    var r = this;
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = (0, f.Z)(function*() {
                        r.initialized || (yield r.keychain.init(), r.initialized = !0)
                    }), this.hasKeys = n => (this.isInitialized(), this.keychain.has(n)), this.getClientId = (0, f.Z)(function*() {
                        return r.isInitialized(), w(We(yield r.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const n = (0, m.Au)();
                        return this.setPrivateKey(n.publicKey, n.privateKey)
                    }, this.signJWT = function() {
                        var n = (0, f.Z)(function*(a) {
                            r.isInitialized();
                            const R = We(yield r.getClientSeed()),
                                T = (0, m.jd)();
                            return yield function qe(v, e, t, s) {
                                return Oe.apply(this, arguments)
                            }(T, a, zn, R)
                        });
                        return function(a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (n, a, y) => {
                        this.isInitialized();
                        const R = this.getPrivateKey(n),
                            T = (0, m.m$)(R, a);
                        return this.setSymKey(T, y)
                    }, this.setSymKey = function() {
                        var n = (0, f.Z)(function*(a, y) {
                            r.isInitialized();
                            const R = y || (0, m.Ym)(a);
                            return yield r.keychain.set(R, a), R
                        });
                        return function(a, y) {
                            return n.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var n = (0, f.Z)(function*(a) {
                            r.isInitialized(), yield r.keychain.del(a)
                        });
                        return function(a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var n = (0, f.Z)(function*(a) {
                            r.isInitialized(), yield r.keychain.del(a)
                        });
                        return function(a) {
                            return n.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var n = (0, f.Z)(function*(a, y, R) {
                            r.isInitialized();
                            const T = (0, m.EN)(R),
                                V = (0, u.u)(y);
                            if ((0, m.Q8)(T)) {
                                const re = T.senderPublicKey,
                                    ye = T.receiverPublicKey;
                                a = yield r.generateSharedKey(re, ye)
                            }
                            const Y = r.getSymKey(a),
                                {
                                    type: ce,
                                    senderPublicKey: Ye
                                } = T;
                            return (0, m.HI)({
                                type: ce,
                                symKey: Y,
                                message: V,
                                senderPublicKey: Ye
                            })
                        });
                        return function(a, y, R) {
                            return n.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var n = (0, f.Z)(function*(a, y, R) {
                            r.isInitialized();
                            const T = (0, m.Ll)(y, R);
                            if ((0, m.Q8)(T)) {
                                const ce = T.receiverPublicKey,
                                    Ye = T.senderPublicKey;
                                a = yield r.generateSharedKey(ce, Ye)
                            }
                            const V = r.getSymKey(a),
                                Y = (0, m.pe)({
                                    symKey: V,
                                    encoded: y
                                });
                            return (0, u.D)(Y)
                        });
                        return function(a, y, R) {
                            return n.apply(this, arguments)
                        }
                    }(), this.getPayloadType = n => {
                        const a = (0, m.vB)(n);
                        return (0, m.WG)(a.type)
                    }, this.getPayloadSenderPublicKey = n => {
                        const a = (0, m.vB)(n);
                        return a.senderPublicKey ? (0, _e.BB)(a.senderPublicKey, m.AW) : void 0
                    }, this.core = e, this.logger = (0, K.generateChildLogger)(t, this.name), this.keychain = s || new li(this.core, this.logger)
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                setPrivateKey(e, t) {
                    var s = this;
                    return (0, f.Z)(function*() {
                        return yield s.keychain.set(e, t), e
                    })()
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                getClientSeed() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        let t = "";
                        try {
                            t = e.keychain.get(ar)
                        } catch {
                            t = (0, m.jd)(), yield e.keychain.set(ar, t)
                        }
                        return function Ln(v, e = "utf8") {
                            const t = Cn[e];
                            if (!t) throw new Error(`Unsupported encoding "${e}"`);
                            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? t.decoder.decode(`${t.prefix}${v}`) : nr(globalThis.Buffer.from(v, "utf-8"))
                        }(t, "base16")
                    })()
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class di extends X {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = bt, this.init = (0, f.Z)(function*() {
                        if (!s.initialized) {
                            s.logger.trace("Initialized");
                            try {
                                const r = yield s.getRelayerMessages();
                                typeof r < "u" && (s.messages = r), s.logger.debug(`Successfully Restored records for ${s.name}`), s.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: s.messages.size
                                })
                            } catch (r) {
                                s.logger.debug(`Failed to Restore records for ${s.name}`), s.logger.error(r)
                            } finally {
                                s.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            s.isInitialized();
                            const y = (0, m.rj)(a);
                            let R = s.messages.get(n);
                            return typeof R > "u" && (R = {}), typeof R[y] < "u" || (R[y] = a, s.messages.set(n, R), yield s.persist()), y
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.get = r => {
                        this.isInitialized();
                        let n = this.messages.get(r);
                        return typeof n > "u" && (n = {}), n
                    }, this.has = (r, n) => (this.isInitialized(), typeof this.get(r)[(0, m.rj)(n)] < "u"), this.del = function() {
                        var r = (0, f.Z)(function*(n) {
                            s.isInitialized(), s.messages.delete(n), yield s.persist()
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.logger = (0, K.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                setRelayerMessages(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, (0, m.KC)(e))
                    })()
                }
                getRelayerMessages() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? (0, m.IP)(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setRelayerMessages(e.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class hi extends W {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.relayer = e, this.logger = t, this.events = new j.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, p.toMiliseconds)(p.TEN_SECONDS), this.queueTimeout = (0, p.toMiliseconds)(p.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var r = (0, f.Z)(function*(n, a, y) {
                            s.logger.debug("Publishing Payload"), s.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: n,
                                    message: a,
                                    opts: y
                                }
                            });
                            try {
                                const R = y ? .ttl || $n,
                                    T = (0, m._H)(y),
                                    V = y ? .prompt || !1,
                                    Y = y ? .tag || 0,
                                    ce = y ? .id || (0, k.getBigIntRpcId)().toString(),
                                    Ye = {
                                        topic: n,
                                        message: a,
                                        opts: {
                                            ttl: R,
                                            relay: T,
                                            prompt: V,
                                            tag: Y,
                                            id: ce
                                        }
                                    },
                                    re = setTimeout(() => s.queue.set(ce, Ye), s.queueTimeout);
                                try {
                                    yield yield(0, m.hF)(s.rpcPublish(n, a, R, T, V, Y, ce), s.publishTimeout), clearTimeout(re), s.relayer.events.emit("relayer_publish", Ye)
                                } catch {
                                    return s.logger.debug("Publishing Payload stalled"), void(s.needsTransportRestart = !0)
                                }
                                s.logger.debug("Successfully Published Payload"), s.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: n,
                                        message: a,
                                        opts: y
                                    }
                                })
                            } catch (R) {
                                throw s.logger.debug("Failed to Publish Payload"), s.logger.error(R), R
                            }
                        });
                        return function(n, a, y) {
                            return r.apply(this, arguments)
                        }
                    }(), this.on = (r, n) => {
                        this.events.on(r, n)
                    }, this.once = (r, n) => {
                        this.events.once(r, n)
                    }, this.off = (r, n) => {
                        this.events.off(r, n)
                    }, this.removeListener = (r, n) => {
                        this.events.removeListener(r, n)
                    }, this.relayer = e, this.logger = (0, K.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, s, r, n, a, y) {
                    var R, T, V, Y;
                    const ce = {
                        method: (0, m.cO)(r.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: s,
                            prompt: n,
                            tag: a
                        },
                        id: y
                    };
                    return (0, m.o8)(null == (R = ce.params) ? void 0 : R.prompt) && (null == (T = ce.params) || delete T.prompt), (0, m.o8)(null == (V = ce.params) ? void 0 : V.tag) && (null == (Y = ce.params) || delete Y.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: ce
                    }), this.relayer.request(ce)
                }
                onPublish(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    var e = this;
                    this.queue.forEach(function() {
                        var t = (0, f.Z)(function*(s) {
                            const {
                                topic: r,
                                message: n,
                                opts: a
                            } = s;
                            yield e.publish(r, n, a)
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", e => {
                        this.onPublish(e.id.toString())
                    })
                }
            }
            class pi {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const s = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...s, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const s = this.get(e);
                        if (!this.exists(e, t)) return;
                        const r = s.filter(n => n !== t);
                        r.length ? this.map.set(e, r) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var gi = Object.defineProperty,
                yi = Object.defineProperties,
                mi = Object.getOwnPropertyDescriptors,
                dr = Object.getOwnPropertySymbols,
                _i = Object.prototype.hasOwnProperty,
                vi = Object.prototype.propertyIsEnumerable,
                hr = (v, e, t) => e in v ? gi(v, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : v[e] = t,
                Pt = (v, e) => {
                    for (var t in e || (e = {})) _i.call(e, t) && hr(v, t, e[t]);
                    if (dr)
                        for (var t of dr(e)) vi.call(e, t) && hr(v, t, e[t]);
                    return v
                },
                jt = (v, e) => yi(v, mi(e));
            class bi extends ie {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new pi, this.events = new j.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = bt, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, f.Z)(function*() {
                        s.initialized || (s.logger.trace("Initialized"), yield s.restart(), s.registerEventListeners(), s.onEnable(), s.clientId = yield s.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            yield s.restartToComplete(), s.isInitialized(), s.logger.debug("Subscribing Topic"), s.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: n,
                                    opts: a
                                }
                            });
                            try {
                                const y = (0, m._H)(a),
                                    R = {
                                        topic: n,
                                        relay: y
                                    };
                                s.pending.set(n, R);
                                const T = yield s.rpcSubscribe(n, y);
                                return s.onSubscribe(T, R), s.logger.debug("Successfully Subscribed Topic"), s.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: n,
                                        opts: a
                                    }
                                }), T
                            } catch (y) {
                                throw s.logger.debug("Failed to Subscribe Topic"), s.logger.error(y), y
                            }
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            yield s.restartToComplete(), s.isInitialized(), typeof a ? .id < "u" ? yield s.unsubscribeById(n, a.id, a): yield s.unsubscribeByTopic(n, a)
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var r = (0, f.Z)(function*(n) {
                            return !!s.topics.includes(n) || (yield new Promise((a, y) => {
                                const R = new p.Watch;
                                R.start(s.pendingSubscriptionWatchLabel);
                                const T = setInterval(() => {
                                    !s.pending.has(n) && s.topics.includes(n) && (clearInterval(T), R.stop(s.pendingSubscriptionWatchLabel), a(!0)), R.elapsed(s.pendingSubscriptionWatchLabel) >= ni && (clearInterval(T), R.stop(s.pendingSubscriptionWatchLabel), y(new Error("Subscription resolution timeout")))
                                }, s.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.on = (r, n) => {
                        this.events.on(r, n)
                    }, this.once = (r, n) => {
                        this.events.once(r, n)
                    }, this.off = (r, n) => {
                        this.events.off(r, n)
                    }, this.removeListener = (r, n) => {
                        this.events.removeListener(r, n)
                    }, this.restart = (0, f.Z)(function*() {
                        s.restartInProgress = !0, yield s.restore(), yield s.reset(), s.restartInProgress = !1
                    }), this.relayer = e, this.logger = (0, K.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let s = !1;
                    try {
                        s = this.getSubscription(e).topic === t
                    } catch {}
                    return s
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(e, t) {
                    var s = this;
                    return (0, f.Z)(function*() {
                        const r = s.topicMap.get(e);
                        yield Promise.all(r.map(function() {
                            var n = (0, f.Z)(function*(a) {
                                return yield s.unsubscribeById(e, a, t)
                            });
                            return function(a) {
                                return n.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(e, t, s) {
                    var r = this;
                    return (0, f.Z)(function*() {
                        r.logger.debug("Unsubscribing Topic"), r.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: s
                            }
                        });
                        try {
                            const n = (0, m._H)(s);
                            yield r.rpcUnsubscribe(e, t, n);
                            const a = (0, m.D6)("USER_DISCONNECTED", `${r.name}, ${e}`);
                            yield r.onUnsubscribe(e, t, a), r.logger.debug("Successfully Unsubscribed Topic"), r.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: e,
                                    id: t,
                                    opts: s
                                }
                            })
                        } catch (n) {
                            throw r.logger.debug("Failed to Unsubscribe Topic"), r.logger.error(n), n
                        }
                    })()
                }
                rpcSubscribe(e, t) {
                    var s = this;
                    return (0, f.Z)(function*() {
                        const r = {
                            method: (0, m.cO)(t.protocol).subscribe,
                            params: {
                                topic: e
                            }
                        };
                        s.logger.debug("Outgoing Relay Payload"), s.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: r
                        });
                        try {
                            yield yield(0, m.hF)(s.relayer.request(r), s.subscribeTimeout)
                        } catch {
                            s.logger.debug("Outgoing Relay Subscribe Payload stalled"), s.relayer.events.emit("relayer_connection_stalled")
                        }
                        return (0, m.rj)(e + s.clientId)
                    })()
                }
                rpcBatchSubscribe(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (!e.length) return;
                        const r = {
                            method: (0, m.cO)(e[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: e.map(n => n.topic)
                            }
                        };
                        t.logger.debug("Outgoing Relay Payload"), t.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: r
                        });
                        try {
                            return yield yield(0, m.hF)(t.relayer.request(r), t.subscribeTimeout)
                        } catch {
                            t.logger.debug("Outgoing Relay Payload stalled"), t.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(e, t, s) {
                    const r = {
                        method: (0, m.cO)(s.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    }), this.relayer.request(r)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, jt(Pt({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(t => {
                        this.setSubscription(t.id, Pt({}, t)), this.pending.delete(t.topic)
                    })
                }
                onUnsubscribe(e, t, s) {
                    var r = this;
                    return (0, f.Z)(function*() {
                        r.events.removeAllListeners(t), r.hasSubscription(t, e) && r.deleteSubscription(t, s), yield r.relayer.messages.del(e)
                    })()
                }
                setRelayerSubscriptions(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.relayer.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getRelayerSubscriptions() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        return yield e.relayer.core.storage.getItem(e.storageKey)
                    })()
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, Pt({}, t)), this.topicMap.set(t.topic, e), this.events.emit(gt_created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: s
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(s)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const s = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(gt_deleted, jt(Pt({}, s), {
                        reason: t
                    }))
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setRelayerSubscriptions(e.values), e.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        if (e.cached.length) {
                            const t = Math.ceil(e.cached.length / e.batchSubscribeTopicsLimit);
                            for (let s = 0; s < t; s++) {
                                const r = e.cached.splice(0, e.batchSubscribeTopicsLimit);
                                yield e.batchSubscribe(r)
                            }
                        }
                        e.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        try {
                            const t = yield e.getRelayerSubscriptions();
                            if (typeof t > "u" || !t.length) return;
                            if (e.subscriptions.size) {
                                const {
                                    message: s
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(s), e.logger.error(`${e.name}: ${JSON.stringify(e.values)}`), new Error(s)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored subscriptions for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore subscriptions for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                batchSubscribe(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (!e.length) return;
                        const s = yield t.rpcBatchSubscribe(e);
                        (0, m.qt)(s) && t.onBatchSubscribe(s.map((r, n) => jt(Pt({}, e[n]), {
                            id: r
                        })))
                    })()
                }
                onConnect() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.restartInProgress || (yield e.restart(), e.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        if (e.relayer.transportExplicitlyClosed) return;
                        const t = [];
                        e.pending.forEach(s => {
                            t.push(s)
                        }), yield e.batchSubscribe(t)
                    })()
                }
                registerEventListeners() {
                    var e = this;
                    this.relayer.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, (0, f.Z)(function*() {
                        yield e.checkPending()
                    })), this.relayer.on("relayer_connect", (0, f.Z)(function*() {
                        yield e.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(gt_created, function() {
                        var t = (0, f.Z)(function*(s) {
                            const r = gt_created;
                            e.logger.info(`Emitting ${r}`), e.logger.debug({
                                type: "event",
                                event: r,
                                data: s
                            }), yield e.persist()
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }()), this.events.on(gt_deleted, function() {
                        var t = (0, f.Z)(function*(s) {
                            const r = gt_deleted;
                            e.logger.info(`Emitting ${r}`), e.logger.debug({
                                type: "event",
                                event: r,
                                data: s
                            }), yield e.persist()
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                restartToComplete() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.restartInProgress && (yield new Promise(t => {
                            const s = setInterval(() => {
                                e.restartInProgress || (clearInterval(s), t())
                            }, e.pollingInterval)
                        }))
                    })()
                }
            }
            var xi = Object.defineProperty,
                pr = Object.getOwnPropertySymbols,
                Ei = Object.prototype.hasOwnProperty,
                wi = Object.prototype.propertyIsEnumerable,
                gr = (v, e, t) => e in v ? xi(v, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : v[e] = t;
            class Ri extends oe {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.events = new j.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.logger.debug("Publishing Request Payload");
                            try {
                                return yield t.toEstablishConnection(), yield t.provider.request(r)
                            } catch (n) {
                                throw t.logger.debug("Failed to Publish Request"), t.logger.error(n), n
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, K.generateChildLogger)(e.logger, this.name) : (0, K.pino)((0, K.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new di(this.logger, e.core), this.subscriber = new bi(this, this.logger), this.publisher = new hi(this, this.logger), this.relayUrl = e ? .relayUrl || ur, this.projectId = e.projectId, this.provider = {}
                }
                init() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.logger.trace("Initialized"), yield e.createProvider(), yield Promise.all([e.messages.init(), e.subscriber.init()]);
                        try {
                            yield e.transportOpen()
                        } catch {
                            e.logger.warn(`Connection via ${e.relayUrl} failed, attempting to connect via failover domain ${lr}...`), yield e.restartTransport(lr)
                        }
                        e.registerEventListeners(), e.initialized = !0, setTimeout((0, f.Z)(function*() {
                            0 === e.subscriber.topics.length && (e.logger.info("No topics subscribed to after init, closing transport"), yield e.transportClose(), e.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(e, t, s) {
                    var r = this;
                    return (0, f.Z)(function*() {
                        r.isInitialized(), yield r.publisher.publish(e, t, s), yield r.recordMessageEvent({
                            topic: e,
                            message: t,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(e, t) {
                    var s = this;
                    return (0, f.Z)(function*() {
                        var r;
                        s.isInitialized();
                        let n = (null == (r = s.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                        return n || (yield Promise.all([new Promise(a => {
                            s.subscriber.once(gt_created, y => {
                                y.topic === e && a()
                            })
                        }), new Promise(function() {
                            var a = (0, f.Z)(function*(y) {
                                n = yield s.subscriber.subscribe(e, t), y()
                            });
                            return function(y) {
                                return a.apply(this, arguments)
                            }
                        }())]), n)
                    })()
                }
                unsubscribe(e, t) {
                    var s = this;
                    return (0, f.Z)(function*() {
                        s.isInitialized(), yield s.subscriber.unsubscribe(e, t)
                    })()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                transportClose() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.transportExplicitlyClosed = !0, e.connected && (yield e.provider.disconnect(), e.events.emit("relayer_transport_closed"))
                    })()
                }
                transportOpen(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (t.transportExplicitlyClosed = !1, !t.reconnecting) {
                            t.relayUrl = e || t.relayUrl, t.reconnecting = !0;
                            try {
                                yield Promise.all([new Promise(s => {
                                    t.initialized || s(), t.subscriber.once("subscription_resubscribed", () => {
                                        s()
                                    })
                                }), yield Promise.race([new Promise(function() {
                                    var s = (0, f.Z)(function*(r, n) {
                                        yield(0, m.hF)(t.provider.connect(), 5e3, `Socket stalled when trying to connect to ${t.relayUrl}`).catch(a => n(a)).then(() => r()).finally(() => t.removeListener("relayer_transport_closed", t.rejectTransportOpen))
                                    });
                                    return function(r, n) {
                                        return s.apply(this, arguments)
                                    }
                                }()), new Promise(s => t.once("relayer_transport_closed", t.rejectTransportOpen))])])
                            } catch (s) {
                                if (t.logger.error(s), !t.isConnectionStalled(s.message)) throw s;
                                t.events.emit("relayer_transport_closed")
                            } finally {
                                t.reconnecting = !1
                            }
                        }
                    })()
                }
                restartTransport(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        t.transportExplicitlyClosed || t.reconnecting || (t.relayUrl = e || t.relayUrl, t.connected && (yield Promise.all([new Promise(s => {
                            t.provider.once("disconnect", () => {
                                s()
                            })
                        }), t.transportClose()])), yield t.createProvider(), yield t.transportOpen())
                    })()
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                rejectTransportOpen() {
                    throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
                }
                createProvider() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        const t = yield e.core.crypto.signJWT(e.relayUrl);
                        e.provider = new ve.r(new class ut {
                            constructor(e) {
                                if (this.url = e, this.events = new j.EventEmitter, this.registering = !1, !(0, k.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                                this.url = e
                            }
                            get connected() {
                                return typeof this.socket < "u"
                            }
                            get connecting() {
                                return this.registering
                            }
                            on(e, t) {
                                this.events.on(e, t)
                            }
                            once(e, t) {
                                this.events.once(e, t)
                            }
                            off(e, t) {
                                this.events.off(e, t)
                            }
                            removeListener(e, t) {
                                this.events.removeListener(e, t)
                            }
                            open(e = this.url) {
                                var t = this;
                                return (0, f.Z)(function*() {
                                    yield t.register(e)
                                })()
                            }
                            close() {
                                var e = this;
                                return (0, f.Z)(function*() {
                                    return new Promise((t, s) => {
                                        typeof e.socket > "u" ? s(new Error("Connection already closed")) : (e.socket.onclose = r => {
                                            e.onClose(r), t()
                                        }, e.socket.close())
                                    })
                                })()
                            }
                            send(e, t) {
                                var s = this;
                                return (0, f.Z)(function*() {
                                    typeof s.socket > "u" && (s.socket = yield s.register());
                                    try {
                                        s.socket.send((0, u.u)(e))
                                    } catch (r) {
                                        s.onError(e.id, r)
                                    }
                                })()
                            }
                            register(e = this.url) {
                                if (!(0, k.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                                if (this.registering) {
                                    const t = this.events.getMaxListeners();
                                    return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, r) => {
                                        this.events.once("register_error", n => {
                                            this.resetMaxListeners(), r(n)
                                        }), this.events.once("open", () => {
                                            if (this.resetMaxListeners(), typeof this.socket > "u") return r(new Error("WebSocket connection is missing or invalid"));
                                            s(this.socket)
                                        })
                                    })
                                }
                                return this.url = e, this.registering = !0, new Promise((t, s) => {
                                    const r = (0, k.isReactNative)() ? void 0 : {
                                            rejectUnauthorized: !(0, k.isLocalhostUrl)(e)
                                        },
                                        n = new ct(e, [], r);
                                    typeof window < "u" ? n.onerror = a => {
                                        s(this.emitError(a.error))
                                    } : n.on("error", a => {
                                        s(this.emitError(a))
                                    }), n.onopen = () => {
                                        this.onOpen(n), t(n)
                                    }
                                })
                            }
                            onOpen(e) {
                                e.onmessage = t => this.onPayload(t), e.onclose = t => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open")
                            }
                            onClose(e) {
                                this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                            }
                            onPayload(e) {
                                if (typeof e.data > "u") return;
                                const t = "string" == typeof e.data ? (0, u.D)(e.data) : e.data;
                                this.events.emit("payload", t)
                            }
                            onError(e, t) {
                                const s = this.parseError(t),
                                    r = s.message || s.toString(),
                                    n = (0, k.formatJsonRpcError)(e, r);
                                this.events.emit("payload", n)
                            }
                            parseError(e, t = this.url) {
                                return (0, k.parseConnectionError)(e, tt(t), "WS")
                            }
                            resetMaxListeners() {
                                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                            }
                            emitError(e) {
                                const t = this.parseError(new Error(e ? .message || `WebSocket connection failed for host: ${tt(this.url)}`));
                                return this.events.emit("register_error", t), t
                            }
                        }((0, m.$0)({
                            sdkVersion: "2.8.6",
                            protocol: e.protocol,
                            version: e.version,
                            relayUrl: e.relayUrl,
                            projectId: e.projectId,
                            auth: t,
                            useOnCloseEvent: !0
                        }))), e.registerProviderListeners()
                    })()
                }
                recordMessageEvent(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        const {
                            topic: s,
                            message: r
                        } = e;
                        yield t.messages.set(s, r)
                    })()
                }
                shouldIgnoreMessageEvent(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        const {
                            topic: s,
                            message: r
                        } = e;
                        return !(yield t.subscriber.isSubscribed(s)) || t.messages.has(s, r)
                    })()
                }
                onProviderPayload(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (t.logger.debug("Incoming Relay Payload"), t.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: e
                            }), (0, k.isJsonRpcRequest)(e)) {
                            if (!e.method.endsWith("_subscription")) return;
                            const s = e.params,
                                {
                                    topic: r,
                                    message: n,
                                    publishedAt: a
                                } = s.data,
                                y = {
                                    topic: r,
                                    message: n,
                                    publishedAt: a
                                };
                            t.logger.debug("Emitting Relayer Payload"), t.logger.trace(((v, e) => {
                                for (var t in e || (e = {})) Ei.call(e, t) && gr(v, t, e[t]);
                                if (pr)
                                    for (var t of pr(e)) wi.call(e, t) && gr(v, t, e[t]);
                                return v
                            })({
                                type: "event",
                                event: s.id
                            }, y)), t.events.emit(s.id, y), yield t.acknowledgePayload(e), yield t.onMessageEvent(y)
                        } else(0, k.isJsonRpcResponse)(e) && t.events.emit("relayer_message_ack", e)
                    })()
                }
                onMessageEvent(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        (yield t.shouldIgnoreMessageEvent(e)) || (t.events.emit("relayer_message", e), yield t.recordMessageEvent(e))
                    })()
                }
                acknowledgePayload(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        const s = (0, k.formatJsonRpcResult)(e.id, !0);
                        yield t.provider.connection.send(s)
                    })()
                }
                registerProviderListeners() {
                    this.provider.on("payload", e => this.onProviderPayload(e)), this.provider.on("connect", () => {
                        this.events.emit("relayer_connect")
                    }), this.provider.on("disconnect", () => {
                        this.onProviderDisconnect()
                    }), this.provider.on("error", e => {
                        this.logger.error(e), this.events.emit("relayer_error", e)
                    })
                }
                registerEventListeners() {
                    var e = this;
                    this.events.on("relayer_connection_stalled", (0, f.Z)(function*() {
                        yield e.restartTransport()
                    }))
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var e = this;
                    this.transportExplicitlyClosed || setTimeout((0, f.Z)(function*() {
                        yield e.restartTransport()
                    }), (0, p.toMiliseconds)(kn))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                toEstablishConnection() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        if (!e.connected) {
                            if (e.connecting) return yield new Promise(t => {
                                const s = setInterval(() => {
                                    e.connected && (clearInterval(s), t())
                                }, e.connectionStatusPollingInterval)
                            });
                            yield e.restartTransport()
                        }
                    })()
                }
            }
            var Si = Object.defineProperty,
                yr = Object.getOwnPropertySymbols,
                Oi = Object.prototype.hasOwnProperty,
                Pi = Object.prototype.propertyIsEnumerable,
                mr = (v, e, t) => e in v ? Si(v, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : v[e] = t,
                _r = (v, e) => {
                    for (var t in e || (e = {})) Oi.call(e, t) && mr(v, t, e[t]);
                    if (yr)
                        for (var t of yr(e)) Pi.call(e, t) && mr(v, t, e[t]);
                    return v
                };
            class Dt extends H {
                constructor(e, t, s, r = bt, n = void 0) {
                    var a;
                    super(e, t, s, r), a = this, this.core = e, this.logger = t, this.name = s, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = bt, this.init = (0, f.Z)(function*() {
                        a.initialized || (a.logger.trace("Initialized"), yield a.restore(), a.cached.forEach(y => {
                            a.getKey && null !== y && !(0, m.o8)(y) ? a.map.set(a.getKey(y), y) : (0, m.xW)(y) ? a.map.set(y.id, y) : (0, m.h1)(y) && a.map.set(y.topic, y)
                        }), a.cached = [], a.initialized = !0)
                    }), this.set = function() {
                        var y = (0, f.Z)(function*(R, T) {
                            a.isInitialized(), a.map.has(R) ? yield a.update(R, T): (a.logger.debug("Setting value"), a.logger.trace({
                                type: "method",
                                method: "set",
                                key: R,
                                value: T
                            }), a.map.set(R, T), yield a.persist())
                        });
                        return function(R, T) {
                            return y.apply(this, arguments)
                        }
                    }(), this.get = y => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: y
                    }), this.getData(y)), this.getAll = y => (this.isInitialized(), y ? this.values.filter(R => Object.keys(y).every(T => vt()(R[T], y[T]))) : this.values), this.update = function() {
                        var y = (0, f.Z)(function*(R, T) {
                            a.isInitialized(), a.logger.debug("Updating value"), a.logger.trace({
                                type: "method",
                                method: "update",
                                key: R,
                                update: T
                            });
                            const V = _r(_r({}, a.getData(R)), T);
                            a.map.set(R, V), yield a.persist()
                        });
                        return function(R, T) {
                            return y.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var y = (0, f.Z)(function*(R, T) {
                            a.isInitialized(), a.map.has(R) && (a.logger.debug("Deleting value"), a.logger.trace({
                                type: "method",
                                method: "delete",
                                key: R,
                                reason: T
                            }), a.map.delete(R), yield a.persist())
                        });
                        return function(R, T) {
                            return y.apply(this, arguments)
                        }
                    }(), this.logger = (0, K.generateChildLogger)(t, this.name), this.storagePrefix = r, this.getKey = n
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getDataStore() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: s
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(s), new Error(s)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setDataStore(e.values)
                    })()
                }
                restore() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        try {
                            const t = yield e.getDataStore();
                            if (typeof t > "u" || !t.length) return;
                            if (e.map.size) {
                                const {
                                    message: s
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(s), new Error(s)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored value for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                value: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore value for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Ti {
                constructor(e, t) {
                    var s = this;
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(z()), this.initialized = !1, this.storagePrefix = bt, this.ignoredPayloadTypes = [m.rV], this.registeredMethods = [], this.init = (0, f.Z)(function*() {
                        s.initialized || (yield s.pairings.init(), yield s.cleanup(), s.registerRelayerEvents(), s.registerExpirerEvents(), s.initialized = !0, s.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: r
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...r])]
                    }, this.create = (0, f.Z)(function*() {
                        s.isInitialized();
                        const r = (0, m.jd)(),
                            n = yield s.core.crypto.setSymKey(r), a = (0, m.gn)(p.FIVE_MINUTES), y = {
                                protocol: "irn"
                            }, R = {
                                topic: n,
                                expiry: a,
                                relay: y,
                                active: !1
                            }, T = (0, m.Bv)({
                                protocol: s.core.protocol,
                                version: s.core.version,
                                topic: n,
                                symKey: r,
                                relay: y
                            });
                        return yield s.pairings.set(n, R), yield s.core.relayer.subscribe(n), s.core.expirer.set(n, a), {
                            topic: n,
                            uri: T
                        }
                    }), this.pair = function() {
                        var r = (0, f.Z)(function*(n) {
                            s.isInitialized(), s.isValidPair(n);
                            const {
                                topic: a,
                                symKey: y,
                                relay: R
                            } = (0, m.he)(n.uri);
                            if (s.pairings.keys.includes(a)) throw new Error(`Pairing already exists: ${a}`);
                            if (s.core.crypto.hasKeys(a)) throw new Error(`Keychain already exists: ${a}`);
                            const T = (0, m.gn)(p.FIVE_MINUTES),
                                V = {
                                    topic: a,
                                    relay: R,
                                    expiry: T,
                                    active: !1
                                };
                            return yield s.pairings.set(a, V), yield s.core.crypto.setSymKey(y, a), yield s.core.relayer.subscribe(a, {
                                relay: R
                            }), s.core.expirer.set(a, T), n.activatePairing && (yield s.activate({
                                topic: a
                            })), V
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var r = (0, f.Z)(function*({
                            topic: n
                        }) {
                            s.isInitialized();
                            const a = (0, m.gn)(p.THIRTY_DAYS);
                            yield s.pairings.update(n, {
                                active: !0,
                                expiry: a
                            }), s.core.expirer.set(n, a)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var r = (0, f.Z)(function*(n) {
                            s.isInitialized(), yield s.isValidPing(n);
                            const {
                                topic: a
                            } = n;
                            if (s.pairings.keys.includes(a)) {
                                const y = yield s.sendRequest(a, "wc_pairingPing", {}), {
                                    done: R,
                                    resolve: T,
                                    reject: V
                                } = (0, m.H1)();
                                s.events.once((0, m.E0)("pairing_ping", y), ({
                                    error: Y
                                }) => {
                                    Y ? V(Y) : T()
                                }), yield R()
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var r = (0, f.Z)(function*({
                            topic: n,
                            expiry: a
                        }) {
                            s.isInitialized(), yield s.pairings.update(n, {
                                expiry: a
                            })
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var r = (0, f.Z)(function*({
                            topic: n,
                            metadata: a
                        }) {
                            s.isInitialized(), yield s.pairings.update(n, {
                                peerMetadata: a
                            })
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var r = (0, f.Z)(function*(n) {
                            s.isInitialized(), yield s.isValidDisconnect(n);
                            const {
                                topic: a
                            } = n;
                            s.pairings.keys.includes(a) && (yield s.sendRequest(a, "wc_pairingDelete", (0, m.D6)("USER_DISCONNECTED")), yield s.deletePairing(a))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var r = (0, f.Z)(function*(n, a, y) {
                            const R = (0, k.formatJsonRpcRequest)(a, y),
                                T = yield s.core.crypto.encode(n, R), V = Ot[a].req;
                            return s.core.history.set(n, R), s.core.relayer.publish(n, T, V), R.id
                        });
                        return function(n, a, y) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var r = (0, f.Z)(function*(n, a, y) {
                            const R = (0, k.formatJsonRpcResult)(n, y),
                                T = yield s.core.crypto.encode(a, R), V = yield s.core.history.get(a, n), Y = Ot[V.request.method].res;
                            yield s.core.relayer.publish(a, T, Y), yield s.core.history.resolve(R)
                        });
                        return function(n, a, y) {
                            return r.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var r = (0, f.Z)(function*(n, a, y) {
                            const R = (0, k.formatJsonRpcError)(n, y),
                                T = yield s.core.crypto.encode(a, R), V = yield s.core.history.get(a, n), Y = Ot[V.request.method] ? Ot[V.request.method].res : Ot.unregistered_method.res;
                            yield s.core.relayer.publish(a, T, Y), yield s.core.history.resolve(R)
                        });
                        return function(n, a, y) {
                            return r.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            yield s.core.relayer.unsubscribe(n), yield Promise.all([s.pairings.delete(n, (0, m.D6)("USER_DISCONNECTED")), s.core.crypto.deleteSymKey(n), a ? Promise.resolve() : s.core.expirer.del(n)])
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, f.Z)(function*() {
                        const r = s.pairings.getAll().filter(n => (0, m.Bw)(n.expiry));
                        yield Promise.all(r.map(n => s.deletePairing(n.topic)))
                    }), this.onRelayEventRequest = r => {
                        const {
                            topic: n,
                            payload: a
                        } = r, y = a.method;
                        if (this.pairings.keys.includes(n)) switch (y) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(n, a);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(n, a);
                            default:
                                return this.onUnknownRpcMethodRequest(n, a)
                        }
                    }, this.onRelayEventResponse = function() {
                        var r = (0, f.Z)(function*(n) {
                            const {
                                topic: a,
                                payload: y
                            } = n, R = (yield s.core.history.get(a, y.id)).request.method;
                            if (s.pairings.keys.includes(a)) return "wc_pairingPing" === R ? s.onPairingPingResponse(a, y) : s.onUnknownRpcMethodResponse(R)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            const {
                                id: y
                            } = a;
                            try {
                                s.isValidPing({
                                    topic: n
                                }), yield s.sendResult(y, n, !0), s.events.emit("pairing_ping", {
                                    id: y,
                                    topic: n
                                })
                            } catch (R) {
                                yield s.sendError(y, n, R), s.logger.error(R)
                            }
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (r, n) => {
                        const {
                            id: a
                        } = n;
                        setTimeout(() => {
                            (0, k.isJsonRpcResult)(n) ? this.events.emit((0, m.E0)("pairing_ping", a), {}): (0, k.isJsonRpcError)(n) && this.events.emit((0, m.E0)("pairing_ping", a), {
                                error: n.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            const {
                                id: y
                            } = a;
                            try {
                                s.isValidDisconnect({
                                    topic: n
                                }), yield s.deletePairing(n), s.events.emit("pairing_delete", {
                                    id: y,
                                    topic: n
                                })
                            } catch (R) {
                                yield s.sendError(y, n, R), s.logger.error(R)
                            }
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            const {
                                id: y,
                                method: R
                            } = a;
                            try {
                                if (s.registeredMethods.includes(R)) return;
                                const T = (0, m.D6)("WC_METHOD_UNSUPPORTED", R);
                                yield s.sendError(y, n, T), s.logger.error(T)
                            } catch (T) {
                                yield s.sendError(y, n, T), s.logger.error(T)
                            }
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = r => {
                        this.registeredMethods.includes(r) || this.logger.error((0, m.D6)("WC_METHOD_UNSUPPORTED", r))
                    }, this.isValidPair = r => {
                        if (!(0, m.EJ)(r)) {
                            const {
                                message: n
                            } = (0, m.Z7)("MISSING_OR_INVALID", `pair() params: ${r}`);
                            throw new Error(n)
                        }
                        if (!(0, m.jv)(r.uri)) {
                            const {
                                message: n
                            } = (0, m.Z7)("MISSING_OR_INVALID", `pair() uri: ${r.uri}`);
                            throw new Error(n)
                        }
                    }, this.isValidPing = function() {
                        var r = (0, f.Z)(function*(n) {
                            if (!(0, m.EJ)(n)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `ping() params: ${n}`);
                                throw new Error(y)
                            }
                            const {
                                topic: a
                            } = n;
                            yield s.isValidPairingTopic(a)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var r = (0, f.Z)(function*(n) {
                            if (!(0, m.EJ)(n)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                                throw new Error(y)
                            }
                            const {
                                topic: a
                            } = n;
                            yield s.isValidPairingTopic(a)
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var r = (0, f.Z)(function*(n) {
                            if (!(0, m.M_)(n, !1)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
                                throw new Error(a)
                            }
                            if (!s.pairings.keys.includes(n)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
                                throw new Error(a)
                            }
                            if ((0, m.Bw)(s.pairings.get(n).expiry)) {
                                yield s.deletePairing(n);
                                const {
                                    message: a
                                } = (0, m.Z7)("EXPIRED", `pairing topic: ${n}`);
                                throw new Error(a)
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, K.generateChildLogger)(t, this.name), this.pairings = new Dt(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    var e = this;
                    this.core.relayer.on("relayer_message", function() {
                        var t = (0, f.Z)(function*(s) {
                            const {
                                topic: r,
                                message: n
                            } = s;
                            if (e.ignoredPayloadTypes.includes(e.core.crypto.getPayloadType(n))) return;
                            const a = yield e.core.crypto.decode(r, n);
                            (0, k.isJsonRpcRequest)(a) ? (e.core.history.set(r, a), e.onRelayEventRequest({
                                topic: r,
                                payload: a
                            })) : (0, k.isJsonRpcResponse)(a) && (yield e.core.history.resolve(a), yield e.onRelayEventResponse({
                                topic: r,
                                payload: a
                            }), e.core.history.delete(r, a.id))
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.core.expirer.on(lt_expired, function() {
                        var t = (0, f.Z)(function*(s) {
                            const {
                                topic: r
                            } = (0, m.iP)(s.target);
                            r && e.pairings.keys.includes(r) && (yield e.deletePairing(r, !0), e.events.emit("pairing_expire", {
                                topic: r
                            }))
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
            class Di extends L {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.core = e, this.logger = t, this.records = new Map, this.events = new j.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = bt, this.init = (0, f.Z)(function*() {
                        s.initialized || (s.logger.trace("Initialized"), yield s.restore(), s.cached.forEach(r => s.records.set(r.id, r)), s.cached = [], s.registerEventListeners(), s.initialized = !0)
                    }), this.set = (r, n, a) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: r,
                                request: n,
                                chainId: a
                            }), this.records.has(n.id)) return;
                        const y = {
                            id: n.id,
                            topic: r,
                            request: {
                                method: n.method,
                                params: n.params || null
                            },
                            chainId: a,
                            expiry: (0, m.gn)(p.THIRTY_DAYS)
                        };
                        this.records.set(y.id, y), this.events.emit("history_created", y)
                    }, this.resolve = function() {
                        var r = (0, f.Z)(function*(n) {
                            if (s.isInitialized(), s.logger.debug("Updating JSON-RPC response history record"), s.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: n
                                }), !s.records.has(n.id)) return;
                            const a = yield s.getRecord(n.id);
                            typeof a.response > "u" && (a.response = (0, k.isJsonRpcError)(n) ? {
                                error: n.error
                            } : {
                                result: n.result
                            }, s.records.set(a.id, a), s.events.emit("history_updated", a))
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            return s.isInitialized(), s.logger.debug("Getting record"), s.logger.trace({
                                type: "method",
                                method: "get",
                                topic: n,
                                id: a
                            }), yield s.getRecord(a)
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.delete = (r, n) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: n
                        }), this.values.forEach(a => {
                            if (a.topic === r) {
                                if (typeof n < "u" && a.id !== n) return;
                                this.records.delete(a.id), this.events.emit("history_deleted", a)
                            }
                        })
                    }, this.exists = function() {
                        var r = (0, f.Z)(function*(n, a) {
                            return s.isInitialized(), !!s.records.has(a) && (yield s.getRecord(a)).topic === n
                        });
                        return function(n, a) {
                            return r.apply(this, arguments)
                        }
                    }(), this.on = (r, n) => {
                        this.events.on(r, n)
                    }, this.once = (r, n) => {
                        this.events.once(r, n)
                    }, this.off = (r, n) => {
                        this.events.off(r, n)
                    }, this.removeListener = (r, n) => {
                        this.events.removeListener(r, n)
                    }, this.logger = (0, K.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach(t => {
                        if (typeof t.response < "u") return;
                        const s = {
                            topic: t.topic,
                            request: (0, k.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(s)
                    }), e
                }
                setJsonRpcRecords(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getJsonRpcRecords() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: s
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(s)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setJsonRpcRecords(e.values), e.events.emit("history_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        try {
                            const t = yield e.getJsonRpcRecords();
                            if (typeof t > "u" || !t.length) return;
                            if (e.records.size) {
                                const {
                                    message: s
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(s), new Error(s)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored records for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                records: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore records for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", e => {
                        const t = "history_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_updated", e => {
                        const t = "history_updated";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_deleted", e => {
                        const t = "history_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, p.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Ni extends fe {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.core = e, this.logger = t, this.expirations = new Map, this.events = new j.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = bt, this.init = (0, f.Z)(function*() {
                        s.initialized || (s.logger.trace("Initialized"), yield s.restore(), s.cached.forEach(r => s.expirations.set(r.target, r)), s.cached = [], s.registerEventListeners(), s.initialized = !0)
                    }), this.has = r => {
                        try {
                            const n = this.formatTarget(r);
                            return typeof this.getExpiration(n) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (r, n) => {
                        this.isInitialized();
                        const a = this.formatTarget(r),
                            y = {
                                target: a,
                                expiry: n
                            };
                        this.expirations.set(a, y), this.checkExpiry(a, y), this.events.emit("expirer_created", {
                            target: a,
                            expiration: y
                        })
                    }, this.get = r => {
                        this.isInitialized();
                        const n = this.formatTarget(r);
                        return this.getExpiration(n)
                    }, this.del = r => {
                        if (this.isInitialized(), this.has(r)) {
                            const n = this.formatTarget(r),
                                a = this.getExpiration(n);
                            this.expirations.delete(n), this.events.emit("expirer_deleted", {
                                target: n,
                                expiration: a
                            })
                        }
                    }, this.on = (r, n) => {
                        this.events.on(r, n)
                    }, this.once = (r, n) => {
                        this.events.once(r, n)
                    }, this.off = (r, n) => {
                        this.events.off(r, n)
                    }, this.removeListener = (r, n) => {
                        this.events.removeListener(r, n)
                    }, this.logger = (0, K.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, m.Z4)(e);
                    if ("number" == typeof e) return (0, m.Gq)(e);
                    const {
                        message: t
                    } = (0, m.Z7)("UNKNOWN_TYPE", "Target type: " + typeof e);
                    throw new Error(t)
                }
                setExpirations(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getExpirations() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                persist() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        yield e.setExpirations(e.values), e.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        try {
                            const t = yield e.getExpirations();
                            if (typeof t > "u" || !t.length) return;
                            if (e.expirations.size) {
                                const {
                                    message: s
                                } = (0, m.Z7)("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(s), new Error(s)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored expirations for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore expirations for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: s
                        } = (0, m.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(s), new Error(s)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: s
                    } = t;
                    (0, p.toMiliseconds)(s) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(lt_expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(D.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", e => {
                        const t = "expirer_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(lt_expired, e => {
                        const t = lt_expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on("expirer_deleted", e => {
                        const t = "expirer_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Ai extends Se {
                constructor(e, t) {
                    var s;
                    super(e, t), s = this, this.projectId = e, this.logger = t, this.name = Mt, this.initialized = !1, this.init = function() {
                        var r = (0, f.Z)(function*(n) {
                            (0, m.b$)() || !(0, m.jU)() || (s.verifyUrl = n ? .verifyUrl || fr, yield s.createIframe())
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var r = (0, f.Z)(function*(n) {
                            var a;
                            if (s.initialized || (yield s.init()), s.iframe) try {
                                null == (a = s.iframe.contentWindow) || a.postMessage(n.attestationId, s.verifyUrl), s.logger.info(`postMessage sent: ${n.attestationId} ${s.verifyUrl}`)
                            } catch {}
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var r = (0, f.Z)(function*(n) {
                            var a;
                            if (s.isDevEnv) return "";
                            s.logger.info(`resolving attestation: ${n.attestationId}`);
                            const y = s.startAbortTimer(p.FIVE_SECONDS),
                                R = yield fetch(`${s.verifyUrl}/attestation/${n.attestationId}`, {
                                    signal: s.abortController.signal
                                });
                            return clearTimeout(y), 200 === R.status ? null == (a = yield R.json()) ? void 0 : a.origin : ""
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.createIframe = (0, f.Z)(function*() {
                        try {
                            yield Promise.race([new Promise((r, n) => {
                                if (document.getElementById(Mt)) return r();
                                const a = document.createElement("iframe");
                                a.setAttribute("id", Mt), a.setAttribute("src", `${s.verifyUrl}/${s.projectId}`), a.style.display = "none", a.addEventListener("load", () => {
                                    s.initialized = !0, r()
                                }), a.addEventListener("error", y => {
                                    n(y)
                                }), document.body.append(a), s.iframe = a
                            }), new Promise(r => {
                                setTimeout(() => r("iframe load timeout"), (0, p.toMiliseconds)(p.ONE_SECOND / 2))
                            })])
                        } catch (r) {
                            s.logger.error(`Verify iframe failed to load: ${s.verifyUrl}`), s.logger.error(r)
                        }
                    }), this.logger = (0, K.generateChildLogger)(t, this.name), this.verifyUrl = fr, this.abortController = new AbortController, this.isDevEnv = (0, m.UG)() && process.env.IS_VITEST
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return setTimeout(() => this.abortController.abort(), (0, p.toMiliseconds)(e))
                }
            }
            var Fi = Object.defineProperty,
                vr = Object.getOwnPropertySymbols,
                Ci = Object.prototype.hasOwnProperty,
                Li = Object.prototype.propertyIsEnumerable,
                br = (v, e, t) => e in v ? Fi(v, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : v[e] = t,
                xr = (v, e) => {
                    for (var t in e || (e = {})) Ci.call(e, t) && br(v, t, e[t]);
                    if (vr)
                        for (var t of vr(e)) Li.call(e, t) && br(v, t, e[t]);
                    return v
                };
            class Ut extends S {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new j.EventEmitter, this.initialized = !1, this.on = (s, r) => this.events.on(s, r), this.once = (s, r) => this.events.once(s, r), this.off = (s, r) => this.events.off(s, r), this.removeListener = (s, r) => this.events.removeListener(s, r), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || ur;
                    const t = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, K.pino)((0, K.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.logger = (0, K.generateChildLogger)(t, this.name), this.heartbeat = new D.HeartBeat, this.crypto = new fi(this, this.logger, e ? .keychain), this.history = new Di(this, this.logger), this.expirer = new Ni(this, this.logger), this.storage = null != e && e.storage ? e.storage : new q.ZP(xr(xr({}, jn), e ? .storageOptions)), this.relayer = new Ri({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new Ti(this, this.logger), this.verify = new Ai(this.projectId || "", this.logger)
                }
                static init(e) {
                    return (0, f.Z)(function*() {
                        const t = new Ut(e);
                        yield t.initialize();
                        const s = yield t.crypto.getClientId();
                        return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", s), t
                    })()
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                start() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.initialized || (yield e.initialize())
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.crypto.init(), yield e.history.init(), yield e.expirer.init(), yield e.relayer.init(), yield e.heartbeat.init(), yield e.pairing.init(), e.initialized = !0, e.logger.info("Core Initialization Success")
                        } catch (t) {
                            throw e.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), e.logger.error(t.message), t
                        }
                    })()
                }
            }
            const Zi = Ut,
                zt = "wc@2:client:",
                Rr = "Proposal expired",
                Nt = p.SEVEN_DAYS,
                Tt = {
                    wc_sessionPropose: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: p.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: p.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: p.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                Vt = {
                    min: p.FIVE_MINUTES,
                    max: p.SEVEN_DAYS
                },
                Vi = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var Ki = Object.defineProperty,
                Bi = Object.defineProperties,
                $i = Object.getOwnPropertyDescriptors,
                Sr = Object.getOwnPropertySymbols,
                Hi = Object.prototype.hasOwnProperty,
                Gi = Object.prototype.propertyIsEnumerable,
                Or = (v, e, t) => e in v ? Ki(v, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : v[e] = t,
                ft = (v, e) => {
                    for (var t in e || (e = {})) Hi.call(e, t) && Or(v, t, e[t]);
                    if (Sr)
                        for (var t of Sr(e)) Gi.call(e, t) && Or(v, t, e[t]);
                    return v
                },
                Kt = (v, e) => Bi(v, $i(e));
            class Wi extends B {
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(z()), this.initialized = !1, this.ignoredPayloadTypes = [m.rV], this.init = (0, f.Z)(function*() {
                        t.initialized || (yield t.cleanup(), t.registerRelayerEvents(), t.registerExpirerEvents(), t.client.core.pairing.register({
                            methods: Object.keys(Tt)
                        }), t.initialized = !0)
                    }), this.connect = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized();
                            const n = Kt(ft({}, r), {
                                requiredNamespaces: r.requiredNamespaces || {},
                                optionalNamespaces: r.optionalNamespaces || {}
                            });
                            yield t.isValidConnect(n);
                            const {
                                pairingTopic: a,
                                requiredNamespaces: y,
                                optionalNamespaces: R,
                                sessionProperties: T,
                                relays: V
                            } = n;
                            let ce, Y = a,
                                Ye = !1;
                            if (Y && (Ye = t.client.core.pairing.pairings.get(Y).active), !Y || !Ye) {
                                const {
                                    topic: rt,
                                    uri: at
                                } = yield t.client.core.pairing.create();
                                Y = rt, ce = at
                            }
                            const re = yield t.client.core.crypto.generateKeyPair(), ye = ft({
                                requiredNamespaces: y,
                                optionalNamespaces: R,
                                relays: V ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: re,
                                    metadata: t.client.metadata
                                }
                            }, T && {
                                sessionProperties: T
                            }), {
                                reject: Te,
                                resolve: Xe,
                                done: st
                            } = (0, m.H1)(p.FIVE_MINUTES, Rr);
                            if (t.events.once((0, m.E0)("session_connect"), function() {
                                    var rt = (0, f.Z)(function*({
                                        error: at,
                                        session: Ie
                                    }) {
                                        if (at) Te(at);
                                        else if (Ie) {
                                            Ie.self.publicKey = re;
                                            const dt = Kt(ft({}, Ie), {
                                                requiredNamespaces: Ie.requiredNamespaces,
                                                optionalNamespaces: Ie.optionalNamespaces
                                            });
                                            yield t.client.session.set(Ie.topic, dt), yield t.setExpiry(Ie.topic, Ie.expiry), Y && (yield t.client.core.pairing.updateMetadata({
                                                topic: Y,
                                                metadata: Ie.peer.metadata
                                            })), Xe(dt)
                                        }
                                    });
                                    return function(at) {
                                        return rt.apply(this, arguments)
                                    }
                                }()), !Y) {
                                const {
                                    message: rt
                                } = (0, m.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${Y}`);
                                throw new Error(rt)
                            }
                            const it = yield t.sendRequest(Y, "wc_sessionPropose", ye), ot = (0, m.gn)(p.FIVE_MINUTES);
                            return yield t.setProposal(it, ft({
                                id: it,
                                expiry: ot
                            }, ye)), {
                                uri: ce,
                                approval: st
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var s = (0, f.Z)(function*(r) {
                            return t.isInitialized(), yield t.client.core.pairing.pair(r)
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidApprove(r);
                            const {
                                id: n,
                                relayProtocol: a,
                                namespaces: y,
                                sessionProperties: R
                            } = r, T = t.client.proposal.get(n);
                            let {
                                pairingTopic: V,
                                proposer: Y,
                                requiredNamespaces: ce,
                                optionalNamespaces: Ye
                            } = T;
                            V = V || "", (0, m.L5)(ce) || (ce = (0, m.fc)(y, "approve()"));
                            const re = yield t.client.core.crypto.generateKeyPair(), ye = Y.publicKey, Te = yield t.client.core.crypto.generateSharedKey(re, ye);
                            V && n && (yield t.client.core.pairing.updateMetadata({
                                topic: V,
                                metadata: Y.metadata
                            }), yield t.sendResult(n, V, {
                                relay: {
                                    protocol: a ? ? "irn"
                                },
                                responderPublicKey: re
                            }), yield t.client.proposal.delete(n, (0, m.D6)("USER_DISCONNECTED")), yield t.client.core.pairing.activate({
                                topic: V
                            }));
                            const Xe = ft({
                                relay: {
                                    protocol: a ? ? "irn"
                                },
                                namespaces: y,
                                requiredNamespaces: ce,
                                optionalNamespaces: Ye,
                                pairingTopic: V,
                                controller: {
                                    publicKey: re,
                                    metadata: t.client.metadata
                                },
                                expiry: (0, m.gn)(Nt)
                            }, R && {
                                sessionProperties: R
                            });
                            yield t.client.core.relayer.subscribe(Te), yield t.sendRequest(Te, "wc_sessionSettle", Xe);
                            const st = Kt(ft({}, Xe), {
                                topic: Te,
                                pairingTopic: V,
                                acknowledged: !1,
                                self: Xe.controller,
                                peer: {
                                    publicKey: Y.publicKey,
                                    metadata: Y.metadata
                                },
                                controller: re
                            });
                            return yield t.client.session.set(Te, st), yield t.setExpiry(Te, (0, m.gn)(Nt)), {
                                topic: Te,
                                acknowledged: () => new Promise(it => setTimeout(() => it(t.client.session.get(Te)), 500))
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidReject(r);
                            const {
                                id: n,
                                reason: a
                            } = r, {
                                pairingTopic: y
                            } = t.client.proposal.get(n);
                            y && (yield t.sendError(n, y, a), yield t.client.proposal.delete(n, (0, m.D6)("USER_DISCONNECTED")))
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidUpdate(r);
                            const {
                                topic: n,
                                namespaces: a
                            } = r, y = yield t.sendRequest(n, "wc_sessionUpdate", {
                                namespaces: a
                            }), {
                                done: R,
                                resolve: T,
                                reject: V
                            } = (0, m.H1)();
                            return t.events.once((0, m.E0)("session_update", y), ({
                                error: Y
                            }) => {
                                Y ? V(Y) : T()
                            }), yield t.client.session.update(n, {
                                namespaces: a
                            }), {
                                acknowledged: R
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidExtend(r);
                            const {
                                topic: n
                            } = r, a = yield t.sendRequest(n, "wc_sessionExtend", {}), {
                                done: y,
                                resolve: R,
                                reject: T
                            } = (0, m.H1)();
                            return t.events.once((0, m.E0)("session_extend", a), ({
                                error: V
                            }) => {
                                V ? T(V) : R()
                            }), yield t.setExpiry(n, (0, m.gn)(Nt)), {
                                acknowledged: y
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidRequest(r);
                            const {
                                chainId: n,
                                request: a,
                                topic: y,
                                expiry: R
                            } = r, T = yield t.sendRequest(y, "wc_sessionRequest", {
                                request: a,
                                chainId: n
                            }, R), {
                                done: V,
                                resolve: Y,
                                reject: ce
                            } = (0, m.H1)(R);
                            t.events.once((0, m.E0)("session_request", T), ({
                                error: re,
                                result: ye
                            }) => {
                                re ? ce(re) : Y(ye)
                            }), t.client.events.emit("session_request_sent", {
                                topic: y,
                                request: a,
                                chainId: n,
                                id: T
                            });
                            const Ye = yield t.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
                            return (0, m.Hh)({
                                id: T,
                                topic: y,
                                wcDeepLink: Ye
                            }), yield V()
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidRespond(r);
                            const {
                                topic: n,
                                response: a
                            } = r, {
                                id: y
                            } = a;
                            (0, k.isJsonRpcResult)(a) ? yield t.sendResult(y, n, a.result): (0, k.isJsonRpcError)(a) && (yield t.sendError(y, n, a.error)), t.deletePendingSessionRequest(r.response.id, {
                                message: "fulfilled",
                                code: 0
                            })
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidPing(r);
                            const {
                                topic: n
                            } = r;
                            if (t.client.session.keys.includes(n)) {
                                const a = yield t.sendRequest(n, "wc_sessionPing", {}), {
                                    done: y,
                                    resolve: R,
                                    reject: T
                                } = (0, m.H1)();
                                t.events.once((0, m.E0)("session_ping", a), ({
                                    error: V
                                }) => {
                                    V ? T(V) : R()
                                }), yield y()
                            } else t.client.core.pairing.pairings.keys.includes(n) && (yield t.client.core.pairing.ping({
                                topic: n
                            }))
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidEmit(r);
                            const {
                                topic: n,
                                event: a,
                                chainId: y
                            } = r;
                            yield t.sendRequest(n, "wc_sessionEvent", {
                                event: a,
                                chainId: y
                            })
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var s = (0, f.Z)(function*(r) {
                            t.isInitialized(), yield t.isValidDisconnect(r);
                            const {
                                topic: n
                            } = r;
                            if (t.client.session.keys.includes(n)) {
                                const a = (0, k.getBigIntRpcId)().toString();
                                let y;
                                const R = T => {
                                    T ? .id.toString() === a && (t.client.core.relayer.events.removeListener("relayer_message_ack", R), y())
                                };
                                yield Promise.all([new Promise(T => {
                                    y = T, t.client.core.relayer.on("relayer_message_ack", R)
                                }), t.sendRequest(n, "wc_sessionDelete", (0, m.D6)("USER_DISCONNECTED"), void 0, a)]), yield t.deleteSession(n)
                            } else yield t.client.core.pairing.disconnect({
                                topic: n
                            })
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.find = s => (this.isInitialized(), this.client.session.getAll().filter(r => (0, m.Ih)(r, s))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (r.pairingTopic) try {
                                const n = t.client.core.pairing.pairings.get(r.pairingTopic),
                                    a = t.client.core.pairing.pairings.getAll().filter(y => {
                                        var R, T;
                                        return (null == (R = y.peerMetadata) ? void 0 : R.url) && (null == (T = y.peerMetadata) ? void 0 : T.url) === r.peer.metadata.url && y.topic && y.topic !== n.topic
                                    });
                                if (0 === a.length) return;
                                t.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), yield Promise.all(a.map(y => t.client.core.pairing.disconnect({
                                    topic: y.topic
                                }))), t.client.logger.info("Duplicate pairings clean up finished")
                            } catch (n) {
                                t.client.logger.error(n)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                self: a
                            } = t.client.session.get(r);
                            yield t.client.core.relayer.unsubscribe(r), t.client.session.delete(r, (0, m.D6)("USER_DISCONNECTED")), t.client.core.crypto.keychain.has(a.publicKey) && (yield t.client.core.crypto.deleteKeyPair(a.publicKey)), t.client.core.crypto.keychain.has(r) && (yield t.client.core.crypto.deleteSymKey(r)), n || t.client.core.expirer.del(r)
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            yield Promise.all([t.client.proposal.delete(r, (0, m.D6)("USER_DISCONNECTED")), n ? Promise.resolve() : t.client.core.expirer.del(r)])
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var s = (0, f.Z)(function*(r, n, a = !1) {
                            yield Promise.all([t.client.pendingRequest.delete(r, n), a ? Promise.resolve() : t.client.core.expirer.del(r)])
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            t.client.session.keys.includes(r) && (yield t.client.session.update(r, {
                                expiry: n
                            })), t.client.core.expirer.set(r, n)
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            yield t.client.proposal.set(r, n), t.client.core.expirer.set(r, n.expiry)
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var s = (0, f.Z)(function*(r) {
                            const n = Tt.wc_sessionRequest.req.ttl,
                                {
                                    id: a,
                                    topic: y,
                                    params: R
                                } = r;
                            yield t.client.pendingRequest.set(a, {
                                id: a,
                                topic: y,
                                params: R
                            }), n && t.client.core.expirer.set(a, (0, m.gn)(n))
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var s = (0, f.Z)(function*(r, n, a, y, R) {
                            const T = (0, k.formatJsonRpcRequest)(n, a);
                            if ((0, m.jU)() && Vi.includes(n)) {
                                const ce = (0, m.rj)(JSON.stringify(T));
                                yield t.client.core.verify.register({
                                    attestationId: ce
                                })
                            }
                            const V = yield t.client.core.crypto.encode(r, T), Y = Tt[n].req;
                            return y && (Y.ttl = y), R && (Y.id = R), t.client.core.history.set(r, T), t.client.core.relayer.publish(r, V, Y), T.id
                        });
                        return function(r, n, a, y, R) {
                            return s.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var s = (0, f.Z)(function*(r, n, a) {
                            const y = (0, k.formatJsonRpcResult)(r, a),
                                R = yield t.client.core.crypto.encode(n, y), T = yield t.client.core.history.get(n, r);
                            t.client.core.relayer.publish(n, R, Tt[T.request.method].res), yield t.client.core.history.resolve(y)
                        });
                        return function(r, n, a) {
                            return s.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var s = (0, f.Z)(function*(r, n, a) {
                            const y = (0, k.formatJsonRpcError)(r, a),
                                R = yield t.client.core.crypto.encode(n, y), T = yield t.client.core.history.get(n, r);
                            t.client.core.relayer.publish(n, R, Tt[T.request.method].res), yield t.client.core.history.resolve(y)
                        });
                        return function(r, n, a) {
                            return s.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, f.Z)(function*() {
                        const s = [],
                            r = [];
                        t.client.session.getAll().forEach(n => {
                            (0, m.Bw)(n.expiry) && s.push(n.topic)
                        }), t.client.proposal.getAll().forEach(n => {
                            (0, m.Bw)(n.expiry) && r.push(n.id)
                        }), yield Promise.all([...s.map(n => t.deleteSession(n)), ...r.map(n => t.deleteProposal(n))])
                    }), this.onRelayEventRequest = s => {
                        const {
                            topic: r,
                            payload: n
                        } = s, a = n.method;
                        switch (a) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(r, n);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(r, n);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(r, n);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(r, n);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(r, n);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(r, n);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(r, n);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(r, n);
                            default:
                                return this.client.logger.info(`Unsupported request method ${a}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var s = (0, f.Z)(function*(r) {
                            const {
                                topic: n,
                                payload: a
                            } = r, y = (yield t.client.core.history.get(n, a.id)).request.method;
                            switch (y) {
                                case "wc_sessionPropose":
                                    return t.onSessionProposeResponse(n, a);
                                case "wc_sessionSettle":
                                    return t.onSessionSettleResponse(n, a);
                                case "wc_sessionUpdate":
                                    return t.onSessionUpdateResponse(n, a);
                                case "wc_sessionExtend":
                                    return t.onSessionExtendResponse(n, a);
                                case "wc_sessionPing":
                                    return t.onSessionPingResponse(n, a);
                                case "wc_sessionRequest":
                                    return t.onSessionRequestResponse(n, a);
                                default:
                                    return t.client.logger.info(`Unsupported response method ${y}`)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = s => {
                        const {
                            topic: r
                        } = s, {
                            message: n
                        } = (0, m.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(n)
                    }, this.onSessionProposeRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                params: a,
                                id: y
                            } = n;
                            try {
                                t.isValidConnect(ft({}, n.params));
                                const R = (0, m.gn)(p.FIVE_MINUTES),
                                    T = ft({
                                        id: y,
                                        pairingTopic: r,
                                        expiry: R
                                    }, a);
                                yield t.setProposal(y, T);
                                const V = (0, m.rj)(JSON.stringify(n)),
                                    Y = yield t.getVerifyContext(V, T.proposer.metadata);
                                t.client.events.emit("session_proposal", {
                                    id: y,
                                    params: T,
                                    verifyContext: Y
                                })
                            } catch (R) {
                                yield t.sendError(y, r, R), t.client.logger.error(R)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a
                            } = n;
                            if ((0, k.isJsonRpcResult)(n)) {
                                const {
                                    result: y
                                } = n;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: y
                                });
                                const R = t.client.proposal.get(a);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: R
                                });
                                const T = R.proposer.publicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: T
                                });
                                const V = y.responderPublicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: V
                                });
                                const Y = yield t.client.core.crypto.generateSharedKey(T, V);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: Y
                                });
                                const ce = yield t.client.core.relayer.subscribe(Y);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: ce
                                }), yield t.client.core.pairing.activate({
                                    topic: r
                                })
                            } else(0, k.isJsonRpcError)(n) && (yield t.client.proposal.delete(a, (0, m.D6)("USER_DISCONNECTED")), t.events.emit((0, m.E0)("session_connect"), {
                                error: n.error
                            }))
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a,
                                params: y
                            } = n;
                            try {
                                t.isValidSessionSettleRequest(y);
                                const {
                                    relay: R,
                                    controller: T,
                                    expiry: V,
                                    namespaces: Y,
                                    requiredNamespaces: ce,
                                    optionalNamespaces: Ye,
                                    sessionProperties: re,
                                    pairingTopic: ye
                                } = n.params, Te = ft({
                                    topic: r,
                                    relay: R,
                                    expiry: V,
                                    namespaces: Y,
                                    acknowledged: !0,
                                    pairingTopic: ye,
                                    requiredNamespaces: ce,
                                    optionalNamespaces: Ye,
                                    controller: T.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: t.client.metadata
                                    },
                                    peer: {
                                        publicKey: T.publicKey,
                                        metadata: T.metadata
                                    }
                                }, re && {
                                    sessionProperties: re
                                });
                                yield t.sendResult(n.id, r, !0), t.events.emit((0, m.E0)("session_connect"), {
                                    session: Te
                                }), t.cleanupDuplicatePairings(Te)
                            } catch (R) {
                                yield t.sendError(a, r, R), t.client.logger.error(R)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a
                            } = n;
                            (0, k.isJsonRpcResult)(n) ? (yield t.client.session.update(r, {
                                acknowledged: !0
                            }), t.events.emit((0, m.E0)("session_approve", a), {})) : (0, k.isJsonRpcError)(n) && (yield t.client.session.delete(r, (0, m.D6)("USER_DISCONNECTED")), t.events.emit((0, m.E0)("session_approve", a), {
                                error: n.error
                            }))
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                params: a,
                                id: y
                            } = n;
                            try {
                                t.isValidUpdate(ft({
                                    topic: r
                                }, a)), yield t.client.session.update(r, {
                                    namespaces: a.namespaces
                                }), yield t.sendResult(y, r, !0), t.client.events.emit("session_update", {
                                    id: y,
                                    topic: r,
                                    params: a
                                })
                            } catch (R) {
                                yield t.sendError(y, r, R), t.client.logger.error(R)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateResponse = (s, r) => {
                        const {
                            id: n
                        } = r;
                        (0, k.isJsonRpcResult)(r) ? this.events.emit((0, m.E0)("session_update", n), {}): (0, k.isJsonRpcError)(r) && this.events.emit((0, m.E0)("session_update", n), {
                            error: r.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a
                            } = n;
                            try {
                                t.isValidExtend({
                                    topic: r
                                }), yield t.setExpiry(r, (0, m.gn)(Nt)), yield t.sendResult(a, r, !0), t.client.events.emit("session_extend", {
                                    id: a,
                                    topic: r
                                })
                            } catch (y) {
                                yield t.sendError(a, r, y), t.client.logger.error(y)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (s, r) => {
                        const {
                            id: n
                        } = r;
                        (0, k.isJsonRpcResult)(r) ? this.events.emit((0, m.E0)("session_extend", n), {}): (0, k.isJsonRpcError)(r) && this.events.emit((0, m.E0)("session_extend", n), {
                            error: r.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a
                            } = n;
                            try {
                                t.isValidPing({
                                    topic: r
                                }), yield t.sendResult(a, r, !0), t.client.events.emit("session_ping", {
                                    id: a,
                                    topic: r
                                })
                            } catch (y) {
                                yield t.sendError(a, r, y), t.client.logger.error(y)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (s, r) => {
                        const {
                            id: n
                        } = r;
                        setTimeout(() => {
                            (0, k.isJsonRpcResult)(r) ? this.events.emit((0, m.E0)("session_ping", n), {}): (0, k.isJsonRpcError)(r) && this.events.emit((0, m.E0)("session_ping", n), {
                                error: r.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a
                            } = n;
                            try {
                                t.isValidDisconnect({
                                    topic: r,
                                    reason: n.params
                                }), yield Promise.all([new Promise(y => {
                                    t.client.core.relayer.once("relayer_publish", (0, f.Z)(function*() {
                                        y(yield t.deleteSession(r))
                                    }))
                                }), t.sendResult(a, r, !0)]), t.client.events.emit("session_delete", {
                                    id: a,
                                    topic: r
                                })
                            } catch (y) {
                                t.client.logger.error(y)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a,
                                params: y
                            } = n;
                            try {
                                t.isValidRequest(ft({
                                    topic: r
                                }, y)), yield t.setPendingSessionRequest({
                                    id: a,
                                    topic: r,
                                    params: y
                                });
                                const R = (0, m.rj)(JSON.stringify(n)),
                                    T = t.client.session.get(r),
                                    V = yield t.getVerifyContext(R, T.peer.metadata);
                                t.client.events.emit("session_request", {
                                    id: a,
                                    topic: r,
                                    params: y,
                                    verifyContext: V
                                })
                            } catch (R) {
                                yield t.sendError(a, r, R), t.client.logger.error(R)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (s, r) => {
                        const {
                            id: n
                        } = r;
                        (0, k.isJsonRpcResult)(r) ? this.events.emit((0, m.E0)("session_request", n), {
                            result: r.result
                        }): (0, k.isJsonRpcError)(r) && this.events.emit((0, m.E0)("session_request", n), {
                            error: r.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const {
                                id: a,
                                params: y
                            } = n;
                            try {
                                t.isValidEmit(ft({
                                    topic: r
                                }, y)), t.client.events.emit("session_event", {
                                    id: a,
                                    topic: r,
                                    params: y
                                })
                            } catch (R) {
                                yield t.sendError(a, r, R), t.client.logger.error(R)
                            }
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidConnect = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
                                throw new Error(V)
                            }
                            const {
                                pairingTopic: n,
                                requiredNamespaces: a,
                                optionalNamespaces: y,
                                sessionProperties: R,
                                relays: T
                            } = r;
                            if ((0, m.o8)(n) || (yield t.isValidPairingTopic(n)), !(0, m.PM)(T, !0)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `connect() relays: ${T}`);
                                throw new Error(V)
                            }!(0, m.o8)(a) && 0 !== (0, m.L5)(a) && t.validateNamespaces(a, "requiredNamespaces"), !(0, m.o8)(y) && 0 !== (0, m.L5)(y) && t.validateNamespaces(y, "optionalNamespaces"), (0, m.o8)(R) || t.validateSessionProps(R, "sessionProperties")
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (s, r) => {
                        const n = (0, m.n)(s, "connect()", r);
                        if (n) throw new Error(n.message)
                    }, this.isValidApprove = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) throw new Error((0, m.Z7)("MISSING_OR_INVALID", `approve() params: ${r}`).message);
                            const {
                                id: n,
                                namespaces: a,
                                relayProtocol: y,
                                sessionProperties: R
                            } = r;
                            yield t.isValidProposalId(n);
                            const T = t.client.proposal.get(n),
                                V = (0, m.in)(a, "approve()");
                            if (V) throw new Error(V.message);
                            const Y = (0, m.rF)(T.requiredNamespaces, a, "approve()");
                            if (Y) throw new Error(Y.message);
                            if (!(0, m.M_)(y, !0)) {
                                const {
                                    message: ce
                                } = (0, m.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${y}`);
                                throw new Error(ce)
                            }(0, m.o8)(R) || t.validateSessionProps(R, "sessionProperties")
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `reject() params: ${r}`);
                                throw new Error(y)
                            }
                            const {
                                id: n,
                                reason: a
                            } = r;
                            if (yield t.isValidProposalId(n), !(0, m.$t)(a)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
                                throw new Error(y)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = s => {
                        if (!(0, m.EJ)(s)) {
                            const {
                                message: V
                            } = (0, m.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${s}`);
                            throw new Error(V)
                        }
                        const {
                            relay: r,
                            controller: n,
                            namespaces: a,
                            expiry: y
                        } = s;
                        if (!(0, m.Z2)(r)) {
                            const {
                                message: V
                            } = (0, m.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(V)
                        }
                        const R = (0, m.Dd)(n, "onSessionSettleRequest()");
                        if (R) throw new Error(R.message);
                        const T = (0, m.in)(a, "onSessionSettleRequest()");
                        if (T) throw new Error(T.message);
                        if ((0, m.Bw)(y)) {
                            const {
                                message: V
                            } = (0, m.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(V)
                        }
                    }, this.isValidUpdate = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `update() params: ${r}`);
                                throw new Error(V)
                            }
                            const {
                                topic: n,
                                namespaces: a
                            } = r;
                            yield t.isValidSessionTopic(n);
                            const y = t.client.session.get(n),
                                R = (0, m.in)(a, "update()");
                            if (R) throw new Error(R.message);
                            const T = (0, m.rF)(y.requiredNamespaces, a, "update()");
                            if (T) throw new Error(T.message)
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("MISSING_OR_INVALID", `extend() params: ${r}`);
                                throw new Error(a)
                            }
                            const {
                                topic: n
                            } = r;
                            yield t.isValidSessionTopic(n)
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() params: ${r}`);
                                throw new Error(V)
                            }
                            const {
                                topic: n,
                                request: a,
                                chainId: y,
                                expiry: R
                            } = r;
                            yield t.isValidSessionTopic(n);
                            const {
                                namespaces: T
                            } = t.client.session.get(n);
                            if (!(0, m.p8)(T, y)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() chainId: ${y}`);
                                throw new Error(V)
                            }
                            if (!(0, m.hH)(a)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
                                throw new Error(V)
                            }
                            if (!(0, m.al)(T, y, a.method)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() method: ${a.method}`);
                                throw new Error(V)
                            }
                            if (R && !(0, m.ON)(R, Vt)) {
                                const {
                                    message: V
                                } = (0, m.Z7)("MISSING_OR_INVALID", `request() expiry: ${R}. Expiry must be a number (in seconds) between ${Vt.min} and ${Vt.max}`);
                                throw new Error(V)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `respond() params: ${r}`);
                                throw new Error(y)
                            }
                            const {
                                topic: n,
                                response: a
                            } = r;
                            if (yield t.isValidSessionTopic(n), !(0, m.JT)(a)) {
                                const {
                                    message: y
                                } = (0, m.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
                                throw new Error(y)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("MISSING_OR_INVALID", `ping() params: ${r}`);
                                throw new Error(a)
                            }
                            const {
                                topic: n
                            } = r;
                            yield t.isValidSessionOrPairingTopic(n)
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: T
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() params: ${r}`);
                                throw new Error(T)
                            }
                            const {
                                topic: n,
                                event: a,
                                chainId: y
                            } = r;
                            yield t.isValidSessionTopic(n);
                            const {
                                namespaces: R
                            } = t.client.session.get(n);
                            if (!(0, m.p8)(R, y)) {
                                const {
                                    message: T
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() chainId: ${y}`);
                                throw new Error(T)
                            }
                            if (!(0, m.nf)(a)) {
                                const {
                                    message: T
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                                throw new Error(T)
                            }
                            if (!(0, m.sI)(R, y, a.name)) {
                                const {
                                    message: T
                                } = (0, m.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
                                throw new Error(T)
                            }
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var s = (0, f.Z)(function*(r) {
                            if (!(0, m.EJ)(r)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("MISSING_OR_INVALID", `disconnect() params: ${r}`);
                                throw new Error(a)
                            }
                            const {
                                topic: n
                            } = r;
                            yield t.isValidSessionOrPairingTopic(n)
                        });
                        return function(r) {
                            return s.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var s = (0, f.Z)(function*(r, n) {
                            const a = {
                                verified: {
                                    verifyUrl: n.verifyUrl || "",
                                    validation: "UNKNOWN",
                                    origin: n.url || ""
                                }
                            };
                            try {
                                const y = yield t.client.core.verify.resolve({
                                    attestationId: r,
                                    verifyUrl: n.verifyUrl
                                });
                                y && (a.verified.origin = y, a.verified.validation = y === n.url ? "VALID" : "INVALID")
                            } catch (y) {
                                t.client.logger.error(y)
                            }
                            return t.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a
                        });
                        return function(r, n) {
                            return s.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (s, r) => {
                        Object.values(s).forEach(n => {
                            if (!(0, m.M_)(n, !1)) {
                                const {
                                    message: a
                                } = (0, m.Z7)("MISSING_OR_INVALID", `${r} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
                                throw new Error(a)
                            }
                        })
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = (0, m.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    var e = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var t = (0, f.Z)(function*(s) {
                            const {
                                topic: r,
                                message: n
                            } = s;
                            if (e.ignoredPayloadTypes.includes(e.client.core.crypto.getPayloadType(n))) return;
                            const a = yield e.client.core.crypto.decode(r, n);
                            (0, k.isJsonRpcRequest)(a) ? (e.client.core.history.set(r, a), e.onRelayEventRequest({
                                topic: r,
                                payload: a
                            })) : (0, k.isJsonRpcResponse)(a) ? (yield e.client.core.history.resolve(a), yield e.onRelayEventResponse({
                                topic: r,
                                payload: a
                            }), e.client.core.history.delete(r, a.id)) : e.onRelayEventUnknownPayload({
                                topic: r,
                                payload: a
                            })
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.client.core.expirer.on(lt_expired, function() {
                        var t = (0, f.Z)(function*(s) {
                            const {
                                topic: r,
                                id: n
                            } = (0, m.iP)(s.target);
                            if (n && e.client.pendingRequest.keys.includes(n)) return yield e.deletePendingSessionRequest(n, (0, m.Z7)("EXPIRED"), !0);
                            r ? e.client.session.keys.includes(r) && (yield e.deleteSession(r, !0), e.client.events.emit("session_expire", {
                                topic: r
                            })) : n && (yield e.deleteProposal(n, !0), e.client.events.emit("proposal_expire", {
                                id: n
                            }))
                        });
                        return function(s) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isValidPairingTopic(e) {
                    if (!(0, m.M_)(e, !1)) {
                        const {
                            message: t
                        } = (0, m.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = (0, m.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if ((0, m.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = (0, m.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                isValidSessionTopic(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (!(0, m.M_)(e, !1)) {
                            const {
                                message: s
                            } = (0, m.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                            throw new Error(s)
                        }
                        if (!t.client.session.keys.includes(e)) {
                            const {
                                message: s
                            } = (0, m.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                            throw new Error(s)
                        }
                        if ((0, m.Bw)(t.client.session.get(e).expiry)) {
                            yield t.deleteSession(e);
                            const {
                                message: s
                            } = (0, m.Z7)("EXPIRED", `session topic: ${e}`);
                            throw new Error(s)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (t.client.session.keys.includes(e)) yield t.isValidSessionTopic(e);
                        else {
                            if (!t.client.core.pairing.pairings.keys.includes(e)) {
                                if ((0, m.M_)(e, !1)) {
                                    const {
                                        message: s
                                    } = (0, m.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                                    throw new Error(s)
                                } {
                                    const {
                                        message: s
                                    } = (0, m.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                                    throw new Error(s)
                                }
                            }
                            t.isValidPairingTopic(e)
                        }
                    })()
                }
                isValidProposalId(e) {
                    var t = this;
                    return (0, f.Z)(function*() {
                        if (!(0, m.Q0)(e)) {
                            const {
                                message: s
                            } = (0, m.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                            throw new Error(s)
                        }
                        if (!t.client.proposal.keys.includes(e)) {
                            const {
                                message: s
                            } = (0, m.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                            throw new Error(s)
                        }
                        if ((0, m.Bw)(t.client.proposal.get(e).expiry)) {
                            yield t.deleteProposal(e);
                            const {
                                message: s
                            } = (0, m.Z7)("EXPIRED", `proposal id: ${e}`);
                            throw new Error(s)
                        }
                    })()
                }
            }
            class qi extends Dt {
                constructor(e, t) {
                    super(e, t, "proposal", zt), this.core = e, this.logger = t
                }
            }
            class ki extends Dt {
                constructor(e, t) {
                    super(e, t, "session", zt), this.core = e, this.logger = t
                }
            }
            class Yi extends Dt {
                constructor(e, t) {
                    super(e, t, "request", zt, s => s.id), this.core = e, this.logger = t
                }
            }
            class Bt extends ue {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new j.EventEmitter, this.on = (r, n) => this.events.on(r, n), this.once = (r, n) => this.events.once(r, n), this.off = (r, n) => this.events.off(r, n), this.removeListener = (r, n) => this.events.removeListener(r, n), this.removeAllListeners = r => this.events.removeAllListeners(r), this.connect = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.connect(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.pair(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.approve(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.reject(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.update(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.extend(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.request(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.respond(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.ping(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.emit(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var r = (0, f.Z)(function*(n) {
                            try {
                                return yield t.engine.disconnect(n)
                            } catch (a) {
                                throw t.logger.error(a.message), a
                            }
                        });
                        return function(n) {
                            return r.apply(this, arguments)
                        }
                    }(), this.find = r => {
                        try {
                            return this.engine.find(r)
                        } catch (n) {
                            throw this.logger.error(n.message), n
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (r) {
                            throw this.logger.error(r.message), r
                        }
                    }, this.name = e ? .name || "client", this.metadata = e ? .metadata || (0, m.D)();
                    const s = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, K.pino)((0, K.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.core = e ? .core || new Zi(e), this.logger = (0, K.generateChildLogger)(s, this.name), this.session = new ki(this.core, this.logger), this.proposal = new qi(this.core, this.logger), this.pendingRequest = new Yi(this.core, this.logger), this.engine = new Wi(this)
                }
                static init(e) {
                    return (0, f.Z)(function*() {
                        const t = new Bt(e);
                        return yield t.initialize(), t
                    })()
                }
                get context() {
                    return (0, K.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var e = this;
                    return (0, f.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.core.start(), yield e.session.init(), yield e.proposal.init(), yield e.pendingRequest.init(), yield e.engine.init(), e.core.verify.init({
                                verifyUrl: e.metadata.verifyUrl
                            }), e.logger.info("SignClient Initialization Success")
                        } catch (t) {
                            throw e.logger.info("SignClient Initialization Failure"), e.logger.error(t.message), t
                        }
                    })()
                }
            }
        },
        70514: te => {
            "use strict";

            function E(f) {
                try {
                    return JSON.stringify(f)
                } catch {
                    return '"[Circular]"'
                }
            }
            te.exports = function x(f, j, z) {
                var q = z && z.stringify || E;
                if ("object" == typeof f && null !== f) {
                    var K = j.length + 1;
                    if (1 === K) return f;
                    var $ = new Array(K);
                    $[0] = q(f);
                    for (var S = 1; S < K; S++) $[S] = q(j[S]);
                    return $.join(" ")
                }
                if ("string" != typeof f) return f;
                var I = j.length;
                if (0 === I) return f;
                for (var L = "", X = 0, W = -1, oe = f && f.length || 0, H = 0; H < oe;) {
                    if (37 === f.charCodeAt(H) && H + 1 < oe) {
                        switch (W = W > -1 ? W : 0, f.charCodeAt(H + 1)) {
                            case 100:
                            case 102:
                                if (X >= I || null == j[X]) break;
                                W < H && (L += f.slice(W, H)), L += Number(j[X]), W = H + 2, H++;
                                break;
                            case 105:
                                if (X >= I || null == j[X]) break;
                                W < H && (L += f.slice(W, H)), L += Math.floor(Number(j[X])), W = H + 2, H++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (X >= I || void 0 === j[X]) break;
                                W < H && (L += f.slice(W, H));
                                var he = typeof j[X];
                                if ("string" === he) {
                                    L += "'" + j[X] + "'", W = H + 2, H++;
                                    break
                                }
                                if ("function" === he) {
                                    L += j[X].name || "<anonymous>", W = H + 2, H++;
                                    break
                                }
                                L += q(j[X]), W = H + 2, H++;
                                break;
                            case 115:
                                if (X >= I) break;
                                W < H && (L += f.slice(W, H)), L += String(j[X]), W = H + 2, H++;
                                break;
                            case 37:
                                W < H && (L += f.slice(W, H)), L += "%", W = H + 2, H++, X--
                        }++X
                    }++H
                }
                return -1 === W ? f : (W < oe && (L += f.slice(W)), L)
            }
        },
        55499: (te, E) => {
            "use strict";
            Object.defineProperty(E, "__esModule", {
                value: !0
            }), E.safeJsonParse = function x(j) {
                if ("string" != typeof j) throw new Error("Cannot safe json parse value of type " + typeof j);
                try {
                    return JSON.parse(j)
                } catch {
                    return j
                }
            }, E.safeJsonStringify = function f(j) {
                return "string" == typeof j ? j : JSON.stringify(j, (z, q) => typeof q > "u" ? null : q)
            }
        },
        3569: te => {
            "use strict";
            te.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        34308: (te, E, x) => {
            "use strict";
            x.r(E), x.d(E, {
                __assign: () => z,
                __asyncDelegator: () => fe,
                __asyncGenerator: () => ge,
                __asyncValues: () => Re,
                __await: () => ie,
                __awaiter: () => S,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => D,
                __exportStar: () => X,
                __extends: () => j,
                __generator: () => I,
                __importDefault: () => ue,
                __importStar: () => Ae,
                __makeTemplateObject: () => Se,
                __metadata: () => $,
                __param: () => K,
                __read: () => oe,
                __rest: () => q,
                __spread: () => H,
                __spreadArrays: () => he,
                __values: () => W
            });
            var f = function(u, h) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(d, p) {
                        d.__proto__ = p
                    } || function(d, p) {
                        for (var _ in p) p.hasOwnProperty(_) && (d[_] = p[_])
                    })(u, h)
            };

            function j(u, h) {
                function d() {
                    this.constructor = u
                }
                f(u, h), u.prototype = null === h ? Object.create(h) : (d.prototype = h.prototype, new d)
            }
            var z = function() {
                return z = Object.assign || function(h) {
                    for (var d, p = 1, _ = arguments.length; p < _; p++)
                        for (var l in d = arguments[p]) Object.prototype.hasOwnProperty.call(d, l) && (h[l] = d[l]);
                    return h
                }, z.apply(this, arguments)
            };

            function q(u, h) {
                var d = {};
                for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && h.indexOf(p) < 0 && (d[p] = u[p]);
                if (null != u && "function" == typeof Object.getOwnPropertySymbols) {
                    var _ = 0;
                    for (p = Object.getOwnPropertySymbols(u); _ < p.length; _++) h.indexOf(p[_]) < 0 && Object.prototype.propertyIsEnumerable.call(u, p[_]) && (d[p[_]] = u[p[_]])
                }
                return d
            }

            function D(u, h, d, p) {
                var g, _ = arguments.length,
                    l = _ < 3 ? h : null === p ? p = Object.getOwnPropertyDescriptor(h, d) : p;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(u, h, d, p);
                else
                    for (var N = u.length - 1; N >= 0; N--)(g = u[N]) && (l = (_ < 3 ? g(l) : _ > 3 ? g(h, d, l) : g(h, d)) || l);
                return _ > 3 && l && Object.defineProperty(h, d, l), l
            }

            function K(u, h) {
                return function(d, p) {
                    h(d, p, u)
                }
            }

            function $(u, h) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(u, h)
            }

            function S(u, h, d, p) {
                return new(d || (d = Promise))(function(l, g) {
                    function N(A) {
                        try {
                            b(p.next(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function G(A) {
                        try {
                            b(p.throw(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function b(A) {
                        A.done ? l(A.value) : function _(l) {
                            return l instanceof d ? l : new d(function(g) {
                                g(l)
                            })
                        }(A.value).then(N, G)
                    }
                    b((p = p.apply(u, h || [])).next())
                })
            }

            function I(u, h) {
                var p, _, l, g, d = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: N(0),
                    throw: N(1),
                    return: N(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function N(b) {
                    return function(A) {
                        return function G(b) {
                            if (p) throw new TypeError("Generator is already executing.");
                            for (; d;) try {
                                if (p = 1, _ && (l = 2 & b[0] ? _.return : b[0] ? _.throw || ((l = _.return) && l.call(_), 0) : _.next) && !(l = l.call(_, b[1])).done) return l;
                                switch (_ = 0, l && (b = [2 & b[0], l.value]), b[0]) {
                                    case 0:
                                    case 1:
                                        l = b;
                                        break;
                                    case 4:
                                        return d.label++, {
                                            value: b[1],
                                            done: !1
                                        };
                                    case 5:
                                        d.label++, _ = b[1], b = [0];
                                        continue;
                                    case 7:
                                        b = d.ops.pop(), d.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = (l = d.trys).length > 0 && l[l.length - 1]) && (6 === b[0] || 2 === b[0])) {
                                            d = 0;
                                            continue
                                        }
                                        if (3 === b[0] && (!l || b[1] > l[0] && b[1] < l[3])) {
                                            d.label = b[1];
                                            break
                                        }
                                        if (6 === b[0] && d.label < l[1]) {
                                            d.label = l[1], l = b;
                                            break
                                        }
                                        if (l && d.label < l[2]) {
                                            d.label = l[2], d.ops.push(b);
                                            break
                                        }
                                        l[2] && d.ops.pop(), d.trys.pop();
                                        continue
                                }
                                b = h.call(u, d)
                            } catch (A) {
                                b = [6, A], _ = 0
                            } finally {
                                p = l = 0
                            }
                            if (5 & b[0]) throw b[1];
                            return {
                                value: b[0] ? b[1] : void 0,
                                done: !0
                            }
                        }([b, A])
                    }
                }
            }

            function L(u, h, d, p) {
                void 0 === p && (p = d), u[p] = h[d]
            }

            function X(u, h) {
                for (var d in u) "default" !== d && !h.hasOwnProperty(d) && (h[d] = u[d])
            }

            function W(u) {
                var h = "function" == typeof Symbol && Symbol.iterator,
                    d = h && u[h],
                    p = 0;
                if (d) return d.call(u);
                if (u && "number" == typeof u.length) return {
                    next: function() {
                        return u && p >= u.length && (u = void 0), {
                            value: u && u[p++],
                            done: !u
                        }
                    }
                };
                throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(u, h) {
                var d = "function" == typeof Symbol && u[Symbol.iterator];
                if (!d) return u;
                var _, g, p = d.call(u),
                    l = [];
                try {
                    for (;
                        (void 0 === h || h-- > 0) && !(_ = p.next()).done;) l.push(_.value)
                } catch (N) {
                    g = {
                        error: N
                    }
                } finally {
                    try {
                        _ && !_.done && (d = p.return) && d.call(p)
                    } finally {
                        if (g) throw g.error
                    }
                }
                return l
            }

            function H() {
                for (var u = [], h = 0; h < arguments.length; h++) u = u.concat(oe(arguments[h]));
                return u
            }

            function he() {
                for (var u = 0, h = 0, d = arguments.length; h < d; h++) u += arguments[h].length;
                var p = Array(u),
                    _ = 0;
                for (h = 0; h < d; h++)
                    for (var l = arguments[h], g = 0, N = l.length; g < N; g++, _++) p[_] = l[g];
                return p
            }

            function ie(u) {
                return this instanceof ie ? (this.v = u, this) : new ie(u)
            }

            function ge(u, h, d) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var _, p = d.apply(u, h || []),
                    l = [];
                return _ = {}, g("next"), g("throw"), g("return"), _[Symbol.asyncIterator] = function() {
                    return this
                }, _;

                function g(P) {
                    p[P] && (_[P] = function(Q) {
                        return new Promise(function(se, De) {
                            l.push([P, Q, se, De]) > 1 || N(P, Q)
                        })
                    })
                }

                function N(P, Q) {
                    try {
                        ! function G(P) {
                            P.value instanceof ie ? Promise.resolve(P.value.v).then(b, A) : M(l[0][2], P)
                        }(p[P](Q))
                    } catch (se) {
                        M(l[0][3], se)
                    }
                }

                function b(P) {
                    N("next", P)
                }

                function A(P) {
                    N("throw", P)
                }

                function M(P, Q) {
                    P(Q), l.shift(), l.length && N(l[0][0], l[0][1])
                }
            }

            function fe(u) {
                var h, d;
                return h = {}, p("next"), p("throw", function(_) {
                    throw _
                }), p("return"), h[Symbol.iterator] = function() {
                    return this
                }, h;

                function p(_, l) {
                    h[_] = u[_] ? function(g) {
                        return (d = !d) ? {
                            value: ie(u[_](g)),
                            done: "return" === _
                        } : l ? l(g) : g
                    } : l
                }
            }

            function Re(u) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d, h = u[Symbol.asyncIterator];
                return h ? h.call(u) : (u = W(u), d = {}, p("next"), p("throw"), p("return"), d[Symbol.asyncIterator] = function() {
                    return this
                }, d);

                function p(l) {
                    d[l] = u[l] && function(g) {
                        return new Promise(function(N, G) {
                            ! function _(l, g, N, G) {
                                Promise.resolve(G).then(function(b) {
                                    l({
                                        value: b,
                                        done: N
                                    })
                                }, g)
                            }(N, G, (g = u[l](g)).done, g.value)
                        })
                    }
                }
            }

            function Se(u, h) {
                return Object.defineProperty ? Object.defineProperty(u, "raw", {
                    value: h
                }) : u.raw = h, u
            }

            function Ae(u) {
                if (u && u.__esModule) return u;
                var h = {};
                if (null != u)
                    for (var d in u) Object.hasOwnProperty.call(u, d) && (h[d] = u[d]);
                return h.default = u, h
            }

            function ue(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function Z(u, h) {
                if (!h.has(u)) throw new TypeError("attempted to get private field on non-instance");
                return h.get(u)
            }

            function B(u, h, d) {
                if (!h.has(u)) throw new TypeError("attempted to set private field on non-instance");
                return h.set(u, d), d
            }
        },
        61116: (te, E, x) => {
            "use strict";
            x.r(E), x.d(E, {
                __assign: () => z,
                __asyncDelegator: () => fe,
                __asyncGenerator: () => ge,
                __asyncValues: () => Re,
                __await: () => ie,
                __awaiter: () => S,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => D,
                __exportStar: () => X,
                __extends: () => j,
                __generator: () => I,
                __importDefault: () => ue,
                __importStar: () => Ae,
                __makeTemplateObject: () => Se,
                __metadata: () => $,
                __param: () => K,
                __read: () => oe,
                __rest: () => q,
                __spread: () => H,
                __spreadArrays: () => he,
                __values: () => W
            });
            var f = function(u, h) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(d, p) {
                        d.__proto__ = p
                    } || function(d, p) {
                        for (var _ in p) p.hasOwnProperty(_) && (d[_] = p[_])
                    })(u, h)
            };

            function j(u, h) {
                function d() {
                    this.constructor = u
                }
                f(u, h), u.prototype = null === h ? Object.create(h) : (d.prototype = h.prototype, new d)
            }
            var z = function() {
                return z = Object.assign || function(h) {
                    for (var d, p = 1, _ = arguments.length; p < _; p++)
                        for (var l in d = arguments[p]) Object.prototype.hasOwnProperty.call(d, l) && (h[l] = d[l]);
                    return h
                }, z.apply(this, arguments)
            };

            function q(u, h) {
                var d = {};
                for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && h.indexOf(p) < 0 && (d[p] = u[p]);
                if (null != u && "function" == typeof Object.getOwnPropertySymbols) {
                    var _ = 0;
                    for (p = Object.getOwnPropertySymbols(u); _ < p.length; _++) h.indexOf(p[_]) < 0 && Object.prototype.propertyIsEnumerable.call(u, p[_]) && (d[p[_]] = u[p[_]])
                }
                return d
            }

            function D(u, h, d, p) {
                var g, _ = arguments.length,
                    l = _ < 3 ? h : null === p ? p = Object.getOwnPropertyDescriptor(h, d) : p;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(u, h, d, p);
                else
                    for (var N = u.length - 1; N >= 0; N--)(g = u[N]) && (l = (_ < 3 ? g(l) : _ > 3 ? g(h, d, l) : g(h, d)) || l);
                return _ > 3 && l && Object.defineProperty(h, d, l), l
            }

            function K(u, h) {
                return function(d, p) {
                    h(d, p, u)
                }
            }

            function $(u, h) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(u, h)
            }

            function S(u, h, d, p) {
                return new(d || (d = Promise))(function(l, g) {
                    function N(A) {
                        try {
                            b(p.next(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function G(A) {
                        try {
                            b(p.throw(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function b(A) {
                        A.done ? l(A.value) : function _(l) {
                            return l instanceof d ? l : new d(function(g) {
                                g(l)
                            })
                        }(A.value).then(N, G)
                    }
                    b((p = p.apply(u, h || [])).next())
                })
            }

            function I(u, h) {
                var p, _, l, g, d = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: N(0),
                    throw: N(1),
                    return: N(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function N(b) {
                    return function(A) {
                        return function G(b) {
                            if (p) throw new TypeError("Generator is already executing.");
                            for (; d;) try {
                                if (p = 1, _ && (l = 2 & b[0] ? _.return : b[0] ? _.throw || ((l = _.return) && l.call(_), 0) : _.next) && !(l = l.call(_, b[1])).done) return l;
                                switch (_ = 0, l && (b = [2 & b[0], l.value]), b[0]) {
                                    case 0:
                                    case 1:
                                        l = b;
                                        break;
                                    case 4:
                                        return d.label++, {
                                            value: b[1],
                                            done: !1
                                        };
                                    case 5:
                                        d.label++, _ = b[1], b = [0];
                                        continue;
                                    case 7:
                                        b = d.ops.pop(), d.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = (l = d.trys).length > 0 && l[l.length - 1]) && (6 === b[0] || 2 === b[0])) {
                                            d = 0;
                                            continue
                                        }
                                        if (3 === b[0] && (!l || b[1] > l[0] && b[1] < l[3])) {
                                            d.label = b[1];
                                            break
                                        }
                                        if (6 === b[0] && d.label < l[1]) {
                                            d.label = l[1], l = b;
                                            break
                                        }
                                        if (l && d.label < l[2]) {
                                            d.label = l[2], d.ops.push(b);
                                            break
                                        }
                                        l[2] && d.ops.pop(), d.trys.pop();
                                        continue
                                }
                                b = h.call(u, d)
                            } catch (A) {
                                b = [6, A], _ = 0
                            } finally {
                                p = l = 0
                            }
                            if (5 & b[0]) throw b[1];
                            return {
                                value: b[0] ? b[1] : void 0,
                                done: !0
                            }
                        }([b, A])
                    }
                }
            }

            function L(u, h, d, p) {
                void 0 === p && (p = d), u[p] = h[d]
            }

            function X(u, h) {
                for (var d in u) "default" !== d && !h.hasOwnProperty(d) && (h[d] = u[d])
            }

            function W(u) {
                var h = "function" == typeof Symbol && Symbol.iterator,
                    d = h && u[h],
                    p = 0;
                if (d) return d.call(u);
                if (u && "number" == typeof u.length) return {
                    next: function() {
                        return u && p >= u.length && (u = void 0), {
                            value: u && u[p++],
                            done: !u
                        }
                    }
                };
                throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(u, h) {
                var d = "function" == typeof Symbol && u[Symbol.iterator];
                if (!d) return u;
                var _, g, p = d.call(u),
                    l = [];
                try {
                    for (;
                        (void 0 === h || h-- > 0) && !(_ = p.next()).done;) l.push(_.value)
                } catch (N) {
                    g = {
                        error: N
                    }
                } finally {
                    try {
                        _ && !_.done && (d = p.return) && d.call(p)
                    } finally {
                        if (g) throw g.error
                    }
                }
                return l
            }

            function H() {
                for (var u = [], h = 0; h < arguments.length; h++) u = u.concat(oe(arguments[h]));
                return u
            }

            function he() {
                for (var u = 0, h = 0, d = arguments.length; h < d; h++) u += arguments[h].length;
                var p = Array(u),
                    _ = 0;
                for (h = 0; h < d; h++)
                    for (var l = arguments[h], g = 0, N = l.length; g < N; g++, _++) p[_] = l[g];
                return p
            }

            function ie(u) {
                return this instanceof ie ? (this.v = u, this) : new ie(u)
            }

            function ge(u, h, d) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var _, p = d.apply(u, h || []),
                    l = [];
                return _ = {}, g("next"), g("throw"), g("return"), _[Symbol.asyncIterator] = function() {
                    return this
                }, _;

                function g(P) {
                    p[P] && (_[P] = function(Q) {
                        return new Promise(function(se, De) {
                            l.push([P, Q, se, De]) > 1 || N(P, Q)
                        })
                    })
                }

                function N(P, Q) {
                    try {
                        ! function G(P) {
                            P.value instanceof ie ? Promise.resolve(P.value.v).then(b, A) : M(l[0][2], P)
                        }(p[P](Q))
                    } catch (se) {
                        M(l[0][3], se)
                    }
                }

                function b(P) {
                    N("next", P)
                }

                function A(P) {
                    N("throw", P)
                }

                function M(P, Q) {
                    P(Q), l.shift(), l.length && N(l[0][0], l[0][1])
                }
            }

            function fe(u) {
                var h, d;
                return h = {}, p("next"), p("throw", function(_) {
                    throw _
                }), p("return"), h[Symbol.iterator] = function() {
                    return this
                }, h;

                function p(_, l) {
                    h[_] = u[_] ? function(g) {
                        return (d = !d) ? {
                            value: ie(u[_](g)),
                            done: "return" === _
                        } : l ? l(g) : g
                    } : l
                }
            }

            function Re(u) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d, h = u[Symbol.asyncIterator];
                return h ? h.call(u) : (u = W(u), d = {}, p("next"), p("throw"), p("return"), d[Symbol.asyncIterator] = function() {
                    return this
                }, d);

                function p(l) {
                    d[l] = u[l] && function(g) {
                        return new Promise(function(N, G) {
                            ! function _(l, g, N, G) {
                                Promise.resolve(G).then(function(b) {
                                    l({
                                        value: b,
                                        done: N
                                    })
                                }, g)
                            }(N, G, (g = u[l](g)).done, g.value)
                        })
                    }
                }
            }

            function Se(u, h) {
                return Object.defineProperty ? Object.defineProperty(u, "raw", {
                    value: h
                }) : u.raw = h, u
            }

            function Ae(u) {
                if (u && u.__esModule) return u;
                var h = {};
                if (null != u)
                    for (var d in u) Object.hasOwnProperty.call(u, d) && (h[d] = u[d]);
                return h.default = u, h
            }

            function ue(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function Z(u, h) {
                if (!h.has(u)) throw new TypeError("attempted to get private field on non-instance");
                return h.get(u)
            }

            function B(u, h, d) {
                if (!h.has(u)) throw new TypeError("attempted to set private field on non-instance");
                return h.set(u, d), d
            }
        },
        33893: (te, E, x) => {
            "use strict";
            x.r(E), x.d(E, {
                __assign: () => z,
                __asyncDelegator: () => fe,
                __asyncGenerator: () => ge,
                __asyncValues: () => Re,
                __await: () => ie,
                __awaiter: () => S,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => D,
                __exportStar: () => X,
                __extends: () => j,
                __generator: () => I,
                __importDefault: () => ue,
                __importStar: () => Ae,
                __makeTemplateObject: () => Se,
                __metadata: () => $,
                __param: () => K,
                __read: () => oe,
                __rest: () => q,
                __spread: () => H,
                __spreadArrays: () => he,
                __values: () => W
            });
            var f = function(u, h) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(d, p) {
                        d.__proto__ = p
                    } || function(d, p) {
                        for (var _ in p) p.hasOwnProperty(_) && (d[_] = p[_])
                    })(u, h)
            };

            function j(u, h) {
                function d() {
                    this.constructor = u
                }
                f(u, h), u.prototype = null === h ? Object.create(h) : (d.prototype = h.prototype, new d)
            }
            var z = function() {
                return z = Object.assign || function(h) {
                    for (var d, p = 1, _ = arguments.length; p < _; p++)
                        for (var l in d = arguments[p]) Object.prototype.hasOwnProperty.call(d, l) && (h[l] = d[l]);
                    return h
                }, z.apply(this, arguments)
            };

            function q(u, h) {
                var d = {};
                for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && h.indexOf(p) < 0 && (d[p] = u[p]);
                if (null != u && "function" == typeof Object.getOwnPropertySymbols) {
                    var _ = 0;
                    for (p = Object.getOwnPropertySymbols(u); _ < p.length; _++) h.indexOf(p[_]) < 0 && Object.prototype.propertyIsEnumerable.call(u, p[_]) && (d[p[_]] = u[p[_]])
                }
                return d
            }

            function D(u, h, d, p) {
                var g, _ = arguments.length,
                    l = _ < 3 ? h : null === p ? p = Object.getOwnPropertyDescriptor(h, d) : p;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(u, h, d, p);
                else
                    for (var N = u.length - 1; N >= 0; N--)(g = u[N]) && (l = (_ < 3 ? g(l) : _ > 3 ? g(h, d, l) : g(h, d)) || l);
                return _ > 3 && l && Object.defineProperty(h, d, l), l
            }

            function K(u, h) {
                return function(d, p) {
                    h(d, p, u)
                }
            }

            function $(u, h) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(u, h)
            }

            function S(u, h, d, p) {
                return new(d || (d = Promise))(function(l, g) {
                    function N(A) {
                        try {
                            b(p.next(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function G(A) {
                        try {
                            b(p.throw(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function b(A) {
                        A.done ? l(A.value) : function _(l) {
                            return l instanceof d ? l : new d(function(g) {
                                g(l)
                            })
                        }(A.value).then(N, G)
                    }
                    b((p = p.apply(u, h || [])).next())
                })
            }

            function I(u, h) {
                var p, _, l, g, d = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: N(0),
                    throw: N(1),
                    return: N(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function N(b) {
                    return function(A) {
                        return function G(b) {
                            if (p) throw new TypeError("Generator is already executing.");
                            for (; d;) try {
                                if (p = 1, _ && (l = 2 & b[0] ? _.return : b[0] ? _.throw || ((l = _.return) && l.call(_), 0) : _.next) && !(l = l.call(_, b[1])).done) return l;
                                switch (_ = 0, l && (b = [2 & b[0], l.value]), b[0]) {
                                    case 0:
                                    case 1:
                                        l = b;
                                        break;
                                    case 4:
                                        return d.label++, {
                                            value: b[1],
                                            done: !1
                                        };
                                    case 5:
                                        d.label++, _ = b[1], b = [0];
                                        continue;
                                    case 7:
                                        b = d.ops.pop(), d.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = (l = d.trys).length > 0 && l[l.length - 1]) && (6 === b[0] || 2 === b[0])) {
                                            d = 0;
                                            continue
                                        }
                                        if (3 === b[0] && (!l || b[1] > l[0] && b[1] < l[3])) {
                                            d.label = b[1];
                                            break
                                        }
                                        if (6 === b[0] && d.label < l[1]) {
                                            d.label = l[1], l = b;
                                            break
                                        }
                                        if (l && d.label < l[2]) {
                                            d.label = l[2], d.ops.push(b);
                                            break
                                        }
                                        l[2] && d.ops.pop(), d.trys.pop();
                                        continue
                                }
                                b = h.call(u, d)
                            } catch (A) {
                                b = [6, A], _ = 0
                            } finally {
                                p = l = 0
                            }
                            if (5 & b[0]) throw b[1];
                            return {
                                value: b[0] ? b[1] : void 0,
                                done: !0
                            }
                        }([b, A])
                    }
                }
            }

            function L(u, h, d, p) {
                void 0 === p && (p = d), u[p] = h[d]
            }

            function X(u, h) {
                for (var d in u) "default" !== d && !h.hasOwnProperty(d) && (h[d] = u[d])
            }

            function W(u) {
                var h = "function" == typeof Symbol && Symbol.iterator,
                    d = h && u[h],
                    p = 0;
                if (d) return d.call(u);
                if (u && "number" == typeof u.length) return {
                    next: function() {
                        return u && p >= u.length && (u = void 0), {
                            value: u && u[p++],
                            done: !u
                        }
                    }
                };
                throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(u, h) {
                var d = "function" == typeof Symbol && u[Symbol.iterator];
                if (!d) return u;
                var _, g, p = d.call(u),
                    l = [];
                try {
                    for (;
                        (void 0 === h || h-- > 0) && !(_ = p.next()).done;) l.push(_.value)
                } catch (N) {
                    g = {
                        error: N
                    }
                } finally {
                    try {
                        _ && !_.done && (d = p.return) && d.call(p)
                    } finally {
                        if (g) throw g.error
                    }
                }
                return l
            }

            function H() {
                for (var u = [], h = 0; h < arguments.length; h++) u = u.concat(oe(arguments[h]));
                return u
            }

            function he() {
                for (var u = 0, h = 0, d = arguments.length; h < d; h++) u += arguments[h].length;
                var p = Array(u),
                    _ = 0;
                for (h = 0; h < d; h++)
                    for (var l = arguments[h], g = 0, N = l.length; g < N; g++, _++) p[_] = l[g];
                return p
            }

            function ie(u) {
                return this instanceof ie ? (this.v = u, this) : new ie(u)
            }

            function ge(u, h, d) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var _, p = d.apply(u, h || []),
                    l = [];
                return _ = {}, g("next"), g("throw"), g("return"), _[Symbol.asyncIterator] = function() {
                    return this
                }, _;

                function g(P) {
                    p[P] && (_[P] = function(Q) {
                        return new Promise(function(se, De) {
                            l.push([P, Q, se, De]) > 1 || N(P, Q)
                        })
                    })
                }

                function N(P, Q) {
                    try {
                        ! function G(P) {
                            P.value instanceof ie ? Promise.resolve(P.value.v).then(b, A) : M(l[0][2], P)
                        }(p[P](Q))
                    } catch (se) {
                        M(l[0][3], se)
                    }
                }

                function b(P) {
                    N("next", P)
                }

                function A(P) {
                    N("throw", P)
                }

                function M(P, Q) {
                    P(Q), l.shift(), l.length && N(l[0][0], l[0][1])
                }
            }

            function fe(u) {
                var h, d;
                return h = {}, p("next"), p("throw", function(_) {
                    throw _
                }), p("return"), h[Symbol.iterator] = function() {
                    return this
                }, h;

                function p(_, l) {
                    h[_] = u[_] ? function(g) {
                        return (d = !d) ? {
                            value: ie(u[_](g)),
                            done: "return" === _
                        } : l ? l(g) : g
                    } : l
                }
            }

            function Re(u) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d, h = u[Symbol.asyncIterator];
                return h ? h.call(u) : (u = W(u), d = {}, p("next"), p("throw"), p("return"), d[Symbol.asyncIterator] = function() {
                    return this
                }, d);

                function p(l) {
                    d[l] = u[l] && function(g) {
                        return new Promise(function(N, G) {
                            ! function _(l, g, N, G) {
                                Promise.resolve(G).then(function(b) {
                                    l({
                                        value: b,
                                        done: N
                                    })
                                }, g)
                            }(N, G, (g = u[l](g)).done, g.value)
                        })
                    }
                }
            }

            function Se(u, h) {
                return Object.defineProperty ? Object.defineProperty(u, "raw", {
                    value: h
                }) : u.raw = h, u
            }

            function Ae(u) {
                if (u && u.__esModule) return u;
                var h = {};
                if (null != u)
                    for (var d in u) Object.hasOwnProperty.call(u, d) && (h[d] = u[d]);
                return h.default = u, h
            }

            function ue(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function Z(u, h) {
                if (!h.has(u)) throw new TypeError("attempted to get private field on non-instance");
                return h.get(u)
            }

            function B(u, h, d) {
                if (!h.has(u)) throw new TypeError("attempted to set private field on non-instance");
                return h.set(u, d), d
            }
        },
        57121: (te, E, x) => {
            "use strict";
            x.r(E), x.d(E, {
                __assign: () => z,
                __asyncDelegator: () => fe,
                __asyncGenerator: () => ge,
                __asyncValues: () => Re,
                __await: () => ie,
                __awaiter: () => S,
                __classPrivateFieldGet: () => Z,
                __classPrivateFieldSet: () => B,
                __createBinding: () => L,
                __decorate: () => D,
                __exportStar: () => X,
                __extends: () => j,
                __generator: () => I,
                __importDefault: () => ue,
                __importStar: () => Ae,
                __makeTemplateObject: () => Se,
                __metadata: () => $,
                __param: () => K,
                __read: () => oe,
                __rest: () => q,
                __spread: () => H,
                __spreadArrays: () => he,
                __values: () => W
            });
            var f = function(u, h) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(d, p) {
                        d.__proto__ = p
                    } || function(d, p) {
                        for (var _ in p) p.hasOwnProperty(_) && (d[_] = p[_])
                    })(u, h)
            };

            function j(u, h) {
                function d() {
                    this.constructor = u
                }
                f(u, h), u.prototype = null === h ? Object.create(h) : (d.prototype = h.prototype, new d)
            }
            var z = function() {
                return z = Object.assign || function(h) {
                    for (var d, p = 1, _ = arguments.length; p < _; p++)
                        for (var l in d = arguments[p]) Object.prototype.hasOwnProperty.call(d, l) && (h[l] = d[l]);
                    return h
                }, z.apply(this, arguments)
            };

            function q(u, h) {
                var d = {};
                for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && h.indexOf(p) < 0 && (d[p] = u[p]);
                if (null != u && "function" == typeof Object.getOwnPropertySymbols) {
                    var _ = 0;
                    for (p = Object.getOwnPropertySymbols(u); _ < p.length; _++) h.indexOf(p[_]) < 0 && Object.prototype.propertyIsEnumerable.call(u, p[_]) && (d[p[_]] = u[p[_]])
                }
                return d
            }

            function D(u, h, d, p) {
                var g, _ = arguments.length,
                    l = _ < 3 ? h : null === p ? p = Object.getOwnPropertyDescriptor(h, d) : p;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(u, h, d, p);
                else
                    for (var N = u.length - 1; N >= 0; N--)(g = u[N]) && (l = (_ < 3 ? g(l) : _ > 3 ? g(h, d, l) : g(h, d)) || l);
                return _ > 3 && l && Object.defineProperty(h, d, l), l
            }

            function K(u, h) {
                return function(d, p) {
                    h(d, p, u)
                }
            }

            function $(u, h) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(u, h)
            }

            function S(u, h, d, p) {
                return new(d || (d = Promise))(function(l, g) {
                    function N(A) {
                        try {
                            b(p.next(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function G(A) {
                        try {
                            b(p.throw(A))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function b(A) {
                        A.done ? l(A.value) : function _(l) {
                            return l instanceof d ? l : new d(function(g) {
                                g(l)
                            })
                        }(A.value).then(N, G)
                    }
                    b((p = p.apply(u, h || [])).next())
                })
            }

            function I(u, h) {
                var p, _, l, g, d = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: N(0),
                    throw: N(1),
                    return: N(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function N(b) {
                    return function(A) {
                        return function G(b) {
                            if (p) throw new TypeError("Generator is already executing.");
                            for (; d;) try {
                                if (p = 1, _ && (l = 2 & b[0] ? _.return : b[0] ? _.throw || ((l = _.return) && l.call(_), 0) : _.next) && !(l = l.call(_, b[1])).done) return l;
                                switch (_ = 0, l && (b = [2 & b[0], l.value]), b[0]) {
                                    case 0:
                                    case 1:
                                        l = b;
                                        break;
                                    case 4:
                                        return d.label++, {
                                            value: b[1],
                                            done: !1
                                        };
                                    case 5:
                                        d.label++, _ = b[1], b = [0];
                                        continue;
                                    case 7:
                                        b = d.ops.pop(), d.trys.pop();
                                        continue;
                                    default:
                                        if (!(l = (l = d.trys).length > 0 && l[l.length - 1]) && (6 === b[0] || 2 === b[0])) {
                                            d = 0;
                                            continue
                                        }
                                        if (3 === b[0] && (!l || b[1] > l[0] && b[1] < l[3])) {
                                            d.label = b[1];
                                            break
                                        }
                                        if (6 === b[0] && d.label < l[1]) {
                                            d.label = l[1], l = b;
                                            break
                                        }
                                        if (l && d.label < l[2]) {
                                            d.label = l[2], d.ops.push(b);
                                            break
                                        }
                                        l[2] && d.ops.pop(), d.trys.pop();
                                        continue
                                }
                                b = h.call(u, d)
                            } catch (A) {
                                b = [6, A], _ = 0
                            } finally {
                                p = l = 0
                            }
                            if (5 & b[0]) throw b[1];
                            return {
                                value: b[0] ? b[1] : void 0,
                                done: !0
                            }
                        }([b, A])
                    }
                }
            }

            function L(u, h, d, p) {
                void 0 === p && (p = d), u[p] = h[d]
            }

            function X(u, h) {
                for (var d in u) "default" !== d && !h.hasOwnProperty(d) && (h[d] = u[d])
            }

            function W(u) {
                var h = "function" == typeof Symbol && Symbol.iterator,
                    d = h && u[h],
                    p = 0;
                if (d) return d.call(u);
                if (u && "number" == typeof u.length) return {
                    next: function() {
                        return u && p >= u.length && (u = void 0), {
                            value: u && u[p++],
                            done: !u
                        }
                    }
                };
                throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function oe(u, h) {
                var d = "function" == typeof Symbol && u[Symbol.iterator];
                if (!d) return u;
                var _, g, p = d.call(u),
                    l = [];
                try {
                    for (;
                        (void 0 === h || h-- > 0) && !(_ = p.next()).done;) l.push(_.value)
                } catch (N) {
                    g = {
                        error: N
                    }
                } finally {
                    try {
                        _ && !_.done && (d = p.return) && d.call(p)
                    } finally {
                        if (g) throw g.error
                    }
                }
                return l
            }

            function H() {
                for (var u = [], h = 0; h < arguments.length; h++) u = u.concat(oe(arguments[h]));
                return u
            }

            function he() {
                for (var u = 0, h = 0, d = arguments.length; h < d; h++) u += arguments[h].length;
                var p = Array(u),
                    _ = 0;
                for (h = 0; h < d; h++)
                    for (var l = arguments[h], g = 0, N = l.length; g < N; g++, _++) p[_] = l[g];
                return p
            }

            function ie(u) {
                return this instanceof ie ? (this.v = u, this) : new ie(u)
            }

            function ge(u, h, d) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var _, p = d.apply(u, h || []),
                    l = [];
                return _ = {}, g("next"), g("throw"), g("return"), _[Symbol.asyncIterator] = function() {
                    return this
                }, _;

                function g(P) {
                    p[P] && (_[P] = function(Q) {
                        return new Promise(function(se, De) {
                            l.push([P, Q, se, De]) > 1 || N(P, Q)
                        })
                    })
                }

                function N(P, Q) {
                    try {
                        ! function G(P) {
                            P.value instanceof ie ? Promise.resolve(P.value.v).then(b, A) : M(l[0][2], P)
                        }(p[P](Q))
                    } catch (se) {
                        M(l[0][3], se)
                    }
                }

                function b(P) {
                    N("next", P)
                }

                function A(P) {
                    N("throw", P)
                }

                function M(P, Q) {
                    P(Q), l.shift(), l.length && N(l[0][0], l[0][1])
                }
            }

            function fe(u) {
                var h, d;
                return h = {}, p("next"), p("throw", function(_) {
                    throw _
                }), p("return"), h[Symbol.iterator] = function() {
                    return this
                }, h;

                function p(_, l) {
                    h[_] = u[_] ? function(g) {
                        return (d = !d) ? {
                            value: ie(u[_](g)),
                            done: "return" === _
                        } : l ? l(g) : g
                    } : l
                }
            }

            function Re(u) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d, h = u[Symbol.asyncIterator];
                return h ? h.call(u) : (u = W(u), d = {}, p("next"), p("throw"), p("return"), d[Symbol.asyncIterator] = function() {
                    return this
                }, d);

                function p(l) {
                    d[l] = u[l] && function(g) {
                        return new Promise(function(N, G) {
                            ! function _(l, g, N, G) {
                                Promise.resolve(G).then(function(b) {
                                    l({
                                        value: b,
                                        done: N
                                    })
                                }, g)
                            }(N, G, (g = u[l](g)).done, g.value)
                        })
                    }
                }
            }

            function Se(u, h) {
                return Object.defineProperty ? Object.defineProperty(u, "raw", {
                    value: h
                }) : u.raw = h, u
            }

            function Ae(u) {
                if (u && u.__esModule) return u;
                var h = {};
                if (null != u)
                    for (var d in u) Object.hasOwnProperty.call(u, d) && (h[d] = u[d]);
                return h.default = u, h
            }

            function ue(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }

            function Z(u, h) {
                if (!h.has(u)) throw new TypeError("attempted to get private field on non-instance");
                return h.get(u)
            }

            function B(u, h, d) {
                if (!h.has(u)) throw new TypeError("attempted to set private field on non-instance");
                return h.set(u, d), d
            }
        },
        71590: (te, E, x) => {
            "use strict";
            const f = x(70514);
            te.exports = D;
            const j = function ue() {
                    function Z(B) {
                        return typeof B < "u" && B
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return Z(self) || Z(window) || Z(this) || {}
                    }
                }().console || {},
                z = {
                    mapHttpRequest: he,
                    mapHttpResponse: he,
                    wrapRequestSerializer: ie,
                    wrapResponseSerializer: ie,
                    wrapErrorSerializer: ie,
                    req: he,
                    res: he,
                    err: function oe(Z) {
                        const B = {
                            type: Z.constructor.name,
                            msg: Z.message,
                            stack: Z.stack
                        };
                        for (const u in Z) void 0 === B[u] && (B[u] = Z[u]);
                        return B
                    }
                };

            function D(Z) {
                (Z = Z || {}).browser = Z.browser || {};
                const B = Z.browser.transmit;
                if (B && "function" != typeof B.send) throw Error("pino: transmit option must have a send function");
                const u = Z.browser.write || j;
                Z.browser.write && (Z.browser.asObject = !0);
                const h = Z.serializers || {},
                    d = function q(Z, B) {
                        return Array.isArray(Z) ? Z.filter(function(h) {
                            return "!stdSerializers.err" !== h
                        }) : !0 === Z && Object.keys(B)
                    }(Z.browser.serialize, h);
                let p = Z.browser.serialize;
                Array.isArray(Z.browser.serialize) && Z.browser.serialize.indexOf("!stdSerializers.err") > -1 && (p = !1), "function" == typeof u && (u.error = u.fatal = u.warn = u.info = u.debug = u.trace = u), !1 === Z.enabled && (Z.level = "silent");
                const l = Z.level || "info",
                    g = Object.create(u);
                g.log || (g.log = ge), Object.defineProperty(g, "levelVal", {
                    get: function G() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(g, "level", {
                    get: function b() {
                        return this._level
                    },
                    set: function A(P) {
                        if ("silent" !== P && !this.levels.values[P]) throw Error("unknown level " + P);
                        this._level = P, K(N, g, "error", "log"), K(N, g, "fatal", "error"), K(N, g, "warn", "error"), K(N, g, "info", "log"), K(N, g, "debug", "log"), K(N, g, "trace", "log")
                    }
                });
                const N = {
                    transmit: B,
                    serialize: d,
                    asObject: Z.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: H(Z)
                };
                return g.levels = D.levels, g.level = l, g.setMaxListeners = g.getMaxListeners = g.emit = g.addListener = g.on = g.prependListener = g.once = g.prependOnceListener = g.removeListener = g.removeAllListeners = g.listeners = g.listenerCount = g.eventNames = g.write = g.flush = ge, g.serializers = h, g._serialize = d, g._stdErrSerialize = p, g.child = function M(P, Q) {
                    if (!P) throw new Error("missing bindings for child Pino");
                    Q = Q || {}, d && P.serializers && (Q.serializers = P.serializers);
                    const se = Q.serializers;
                    if (d && se) {
                        var De = Object.assign({}, h, se),
                            xt = !0 === Z.browser.serialize ? Object.keys(De) : d;
                        delete P.serializers, I([P], xt, De, this._stdErrSerialize)
                    }

                    function _t(Qe) {
                        this._childLevel = 1 + (0 | Qe._childLevel), this.error = L(Qe, P, "error"), this.fatal = L(Qe, P, "fatal"), this.warn = L(Qe, P, "warn"), this.info = L(Qe, P, "info"), this.debug = L(Qe, P, "debug"), this.trace = L(Qe, P, "trace"), De && (this.serializers = De, this._serialize = xt), B && (this._logEvent = W([].concat(Qe._logEvent.bindings, P)))
                    }
                    return _t.prototype = this, new _t(this)
                }, B && (g._logEvent = W()), g
            }

            function K(Z, B, u, h) {
                const d = Object.getPrototypeOf(B);
                B[u] = B.levelVal > B.levels.values[u] ? ge : d[u] ? d[u] : j[u] || j[h] || ge,
                    function $(Z, B, u) {
                        !Z.transmit && B[u] === ge || (B[u] = function(h) {
                            return function() {
                                const p = Z.timestamp(),
                                    _ = new Array(arguments.length),
                                    l = Object.getPrototypeOf && Object.getPrototypeOf(this) === j ? j : this;
                                for (var g = 0; g < _.length; g++) _[g] = arguments[g];
                                if (Z.serialize && !Z.asObject && I(_, this._serialize, this.serializers, this._stdErrSerialize), Z.asObject ? h.call(l, function S(Z, B, u, h) {
                                        Z._serialize && I(u, Z._serialize, Z.serializers, Z._stdErrSerialize);
                                        const d = u.slice();
                                        let p = d[0];
                                        const _ = {};
                                        h && (_.time = h), _.level = D.levels.values[B];
                                        let l = 1 + (0 | Z._childLevel);
                                        if (l < 1 && (l = 1), null !== p && "object" == typeof p) {
                                            for (; l-- && "object" == typeof d[0];) Object.assign(_, d.shift());
                                            p = d.length ? f(d.shift(), d) : void 0
                                        } else "string" == typeof p && (p = f(d.shift(), d));
                                        return void 0 !== p && (_.msg = p), _
                                    }(this, u, _, p)) : h.apply(l, _), Z.transmit) {
                                    const N = Z.transmit.level || B.level,
                                        b = D.levels.values[u];
                                    if (b < D.levels.values[N]) return;
                                    ! function X(Z, B, u) {
                                        const h = B.send,
                                            d = B.ts,
                                            p = B.methodLevel,
                                            _ = B.methodValue,
                                            l = B.val,
                                            g = Z._logEvent.bindings;
                                        I(u, Z._serialize || Object.keys(Z.serializers), Z.serializers, void 0 === Z._stdErrSerialize || Z._stdErrSerialize), Z._logEvent.ts = d, Z._logEvent.messages = u.filter(function(N) {
                                            return -1 === g.indexOf(N)
                                        }), Z._logEvent.level.label = p, Z._logEvent.level.value = _, h(p, Z._logEvent, l), Z._logEvent = W(g)
                                    }(this, {
                                        ts: p,
                                        methodLevel: u,
                                        methodValue: b,
                                        transmitLevel: N,
                                        transmitValue: D.levels.values[Z.transmit.level || B.level],
                                        send: Z.transmit.send,
                                        val: B.levelVal
                                    }, _)
                                }
                            }
                        }(B[u]))
                    }(Z, B, u)
            }

            function I(Z, B, u, h) {
                for (const d in Z)
                    if (h && Z[d] instanceof Error) Z[d] = D.stdSerializers.err(Z[d]);
                    else if ("object" == typeof Z[d] && !Array.isArray(Z[d]))
                    for (const p in Z[d]) B && B.indexOf(p) > -1 && p in u && (Z[d][p] = u[p](Z[d][p]))
            }

            function L(Z, B, u) {
                return function() {
                    const h = new Array(1 + arguments.length);
                    h[0] = B;
                    for (var d = 1; d < h.length; d++) h[d] = arguments[d - 1];
                    return Z[u].apply(this, h)
                }
            }

            function W(Z) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: Z || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function H(Z) {
                return "function" == typeof Z.timestamp ? Z.timestamp : !1 === Z.timestamp ? fe : Re
            }

            function he() {
                return {}
            }

            function ie(Z) {
                return Z
            }

            function ge() {}

            function fe() {
                return !1
            }

            function Re() {
                return Date.now()
            }
            D.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, D.stdSerializers = z, D.stdTimeFunctions = Object.assign({}, {
                nullTime: fe,
                epochTime: Re,
                unixTime: function Se() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function Ae() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);