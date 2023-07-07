(self.webpackChunkwall_st = self.webpackChunkwall_st || []).push([
    [60], {
        61400: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.Common = void 0;
            const p = C(7820),
                l = C(30171),
                A = C(82016),
                G = C(47295),
                h = C(43323),
                H = C(36987),
                B = C(52823),
                Z = C(75810),
                U = C(99912),
                w = C(62620),
                O = C(35500),
                g = C(88395);
            class d extends A.EventEmitter {
                constructor(f) {
                    super(), this._eips = [], this._customChains = f.customChains ? ? [], this._chainParams = this.setChain(f.chain), this.DEFAULT_HARDFORK = this._chainParams.defaultHardfork ? ? w.Hardfork.Merge, this.HARDFORK_CHANGES = this.hardforks().map(s => [s.name, O.hardforks[s.name]]), this._hardfork = this.DEFAULT_HARDFORK, void 0 !== f.hardfork && this.setHardfork(f.hardfork), f.eips && this.setEIPs(f.eips)
                }
                static custom(f, s = {}) {
                    const m = { ...d._getChainParams(s.baseChain ? ? "mainnet")
                    };
                    if (m.name = "custom-chain", "string" != typeof f) return new d({
                        chain: { ...m,
                            ...f
                        },
                        ...s
                    });
                    if (f === w.CustomChain.PolygonMainnet) return d.custom({
                        name: w.CustomChain.PolygonMainnet,
                        chainId: 137,
                        networkId: 137
                    }, s);
                    if (f === w.CustomChain.PolygonMumbai) return d.custom({
                        name: w.CustomChain.PolygonMumbai,
                        chainId: 80001,
                        networkId: 80001
                    }, s);
                    if (f === w.CustomChain.ArbitrumRinkebyTestnet) return d.custom({
                        name: w.CustomChain.ArbitrumRinkebyTestnet,
                        chainId: 421611,
                        networkId: 421611
                    }, s);
                    if (f === w.CustomChain.ArbitrumOne) return d.custom({
                        name: w.CustomChain.ArbitrumOne,
                        chainId: 42161,
                        networkId: 42161
                    }, s);
                    if (f === w.CustomChain.xDaiChain) return d.custom({
                        name: w.CustomChain.xDaiChain,
                        chainId: 100,
                        networkId: 100
                    }, s);
                    if (f === w.CustomChain.OptimisticKovan) return d.custom({
                        name: w.CustomChain.OptimisticKovan,
                        chainId: 69,
                        networkId: 69
                    }, {
                        hardfork: w.Hardfork.Berlin,
                        ...s
                    });
                    if (f === w.CustomChain.OptimisticEthereum) return d.custom({
                        name: w.CustomChain.OptimisticEthereum,
                        chainId: 10,
                        networkId: 10
                    }, {
                        hardfork: w.Hardfork.Berlin,
                        ...s
                    });
                    throw new Error(`Custom chain ${f} not supported`)
                }
                static fromGethGenesis(f, {
                    chain: s,
                    eips: c,
                    genesisHash: m,
                    hardfork: _,
                    mergeForkIdPostMerge: L
                }) {
                    const F = (0, g.parseGethGenesis)(f, s, L),
                        Y = new d({
                            chain: F.name ? ? "custom",
                            customChains: [F],
                            eips: c,
                            hardfork: _ ? ? F.hardfork
                        });
                    return void 0 !== m && Y.setForkHashes(m), Y
                }
                static isSupportedChainId(f) {
                    return !!this._getInitializedChains().names[f.toString()]
                }
                static _getChainParams(f, s) {
                    const c = this._getInitializedChains(s);
                    if ("number" == typeof f || "bigint" == typeof f) {
                        if (f = f.toString(), c.names[f]) return c[c.names[f]];
                        throw new Error(`Chain with ID ${f} not supported`)
                    }
                    if (void 0 !== c[f]) return c[f];
                    throw new Error(`Chain with name ${f} not supported`)
                }
                setChain(f) {
                    if ("number" == typeof f || "bigint" == typeof f || "string" == typeof f) this._chainParams = d._getChainParams(f, this._customChains);
                    else {
                        if ("object" != typeof f) throw new Error("Wrong input format"); {
                            if (this._customChains.length > 0) throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
                            const s = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
                            for (const c of s)
                                if (!(c in f)) throw new Error(`Missing required chain parameter: ${c}`);
                            this._chainParams = f
                        }
                    }
                    for (const s of this.hardforks())
                        if (void 0 === s.block) throw new Error("Hardfork cannot have undefined block number");
                    return this._chainParams
                }
                setHardfork(f) {
                    let s = !1;
                    for (const c of this.HARDFORK_CHANGES) c[0] === f && (this._hardfork !== f && (this._hardfork = f, this.emit("hardforkChanged", f)), s = !0);
                    if (!s) throw new Error(`Hardfork with name ${f} not supported`)
                }
                getHardforkByBlockNumber(f, s, c) {
                    f = (0, p.toType)(f, p.TypeOutput.BigInt), s = (0, p.toType)(s, p.TypeOutput.BigInt), c = (0, p.toType)(c, p.TypeOutput.Number);
                    const m = this.hardforks().filter(V => null !== V.block || null != V.ttd || void 0 !== V.timestamp),
                        _ = m.findIndex(V => null != V.ttd);
                    if (m.slice(_ + 1).findIndex(V => null != V.ttd) >= 0) throw Error("More than one merge hardforks found with ttd specified");
                    let F = m.findIndex(V => null !== V.block && V.block > f || void 0 !== c && Number(V.timestamp) > c);
                    if (-1 === F) F = m.length;
                    else if (0 === F) throw Error("Must have at least one hardfork at block 0");
                    if (void 0 === c && (F -= m.slice(0, F).reverse().findIndex(X => null !== X.block || void 0 !== X.ttd)), F -= 1, null === m[F].block && void 0 === m[F].timestamp)(null == s || BigInt(m[F].ttd) > s) && (F -= 1);
                    else if (_ >= 0 && null != s) {
                        if (F >= _ && BigInt(m[_].ttd) > s) throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
                        if (F < _ && BigInt(m[_].ttd) <= s) throw Error("HF determined by block number is lower than the minimum total difficulty HF")
                    }
                    const Y = F;
                    for (; F < m.length - 1 && m[F].block === m[F + 1].block && m[F].timestamp === m[F + 1].timestamp; F++);
                    if (c) {
                        if (m.slice(0, Y).reduce((q, S) => Math.max(Number(S.timestamp ? ? "0"), q), 0) > c) throw Error("Maximum HF determined by timestamp is lower than the block number/ttd HF");
                        if (m.slice(F + 1).reduce((q, S) => Math.min(Number(S.timestamp ? ? c), q), c) < c) throw Error("Maximum HF determined by block number/ttd is lower than timestamp HF")
                    }
                    return m[F].name
                }
                setHardforkByBlockNumber(f, s, c) {
                    const m = this.getHardforkByBlockNumber(f, s, c);
                    return this.setHardfork(m), m
                }
                _getHardfork(f) {
                    const s = this.hardforks();
                    for (const c of s)
                        if (c.name === f) return c;
                    return null
                }
                setEIPs(f = []) {
                    for (const s of f) {
                        if (!(s in U.EIPs)) throw new Error(`${s} not supported`);
                        const c = this.gteHardfork(U.EIPs[s].minimumHardfork);
                        if (!c) throw new Error(`${s} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${c}`);
                        if (void 0 !== U.EIPs[s].requiredEIPs)
                            for (const m of U.EIPs[s].requiredEIPs)
                                if (!f.includes(m) && !this.isActivatedEIP(m)) throw new Error(`${s} requires EIP ${m}, but is not included in the EIP list`)
                    }
                    this._eips = f
                }
                param(f, s) {
                    let c;
                    for (const m of this._eips)
                        if (c = this.paramByEIP(f, s, m), void 0 !== c) return c;
                    return this.paramByHardfork(f, s, this._hardfork)
                }
                paramByHardfork(f, s, c) {
                    let m = null;
                    for (const _ of this.HARDFORK_CHANGES) {
                        if ("eips" in _[1]) {
                            const L = _[1].eips;
                            for (const F of L) {
                                const Y = this.paramByEIP(f, s, F);
                                m = "bigint" == typeof Y ? Y : m
                            }
                        } else {
                            if (void 0 === _[1][f]) throw new Error(`Topic ${f} not defined`);
                            void 0 !== _[1][f][s] && (m = _[1][f][s].v)
                        }
                        if (_[0] === c) break
                    }
                    return BigInt(m ? ? 0)
                }
                paramByEIP(f, s, c) {
                    if (!(c in U.EIPs)) throw new Error(`${c} not supported`);
                    const m = U.EIPs[c];
                    if (!(f in m)) throw new Error(`Topic ${f} not defined`);
                    if (void 0 !== m[f][s]) return BigInt(m[f][s].v)
                }
                paramByBlock(f, s, c, m, _) {
                    const L = this.getHardforkByBlockNumber(c, m, _);
                    return this.paramByHardfork(f, s, L)
                }
                isActivatedEIP(f) {
                    if (this.eips().includes(f)) return !0;
                    for (const s of this.HARDFORK_CHANGES) {
                        const c = s[1];
                        if (this.gteHardfork(c.name) && "eips" in c && c.eips.includes(f)) return !0
                    }
                    return !1
                }
                hardforkIsActiveOnBlock(f, s) {
                    s = (0, p.toType)(s, p.TypeOutput.BigInt);
                    const c = this.hardforkBlock(f = f ? ? this._hardfork);
                    return "bigint" == typeof c && c !== BigInt(0) && s >= c
                }
                activeOnBlock(f) {
                    return this.hardforkIsActiveOnBlock(null, f)
                }
                hardforkGteHardfork(f, s) {
                    f = f ? ? this._hardfork;
                    const c = this.hardforks();
                    let m = -1,
                        _ = -1,
                        L = 0;
                    for (const F of c) F.name === f && (m = L), F.name === s && (_ = L), L += 1;
                    return m >= _ && -1 !== _
                }
                gteHardfork(f) {
                    return this.hardforkGteHardfork(null, f)
                }
                hardforkBlock(f) {
                    f = f ? ? this._hardfork;
                    const s = this._getHardfork(f) ? .block;
                    return null == s ? null : BigInt(s)
                }
                hardforkTimestamp(f) {
                    f = f ? ? this._hardfork;
                    const s = this._getHardfork(f) ? .timestamp;
                    return null == s ? null : BigInt(s)
                }
                eipBlock(f) {
                    for (const s of this.HARDFORK_CHANGES) {
                        const c = s[1];
                        if ("eips" in c && c.eips.includes(f)) return this.hardforkBlock(s[0])
                    }
                    return null
                }
                hardforkTTD(f) {
                    f = f ? ? this._hardfork;
                    const s = this._getHardfork(f) ? .ttd;
                    return null == s ? null : BigInt(s)
                }
                isHardforkBlock(f, s) {
                    f = (0, p.toType)(f, p.TypeOutput.BigInt);
                    const c = this.hardforkBlock(s = s ? ? this._hardfork);
                    return "bigint" == typeof c && c !== BigInt(0) && c === f
                }
                nextHardforkBlockOrTimestamp(f) {
                    f = f ? ? this._hardfork;
                    const s = this.hardforks();
                    let c = s.findIndex(F => F.name === f);
                    if (f === w.Hardfork.Merge && (c -= 1), c < 0) return null;
                    let m = s[c].timestamp ? ? s[c].block;
                    m = null != m ? Number(m) : null;
                    const _ = s.slice(c + 1).find(F => {
                        let Y = F.timestamp ? ? F.block;
                        return Y = null != Y ? Number(Y) : null, F.name !== w.Hardfork.Merge && null != Y && Y !== m
                    });
                    if (void 0 === _) return null;
                    const L = _.timestamp ? ? _.block;
                    return null == L ? null : BigInt(L)
                }
                nextHardforkBlock(f) {
                    let s = this.hardforkBlock(f = f ? ? this._hardfork);
                    if (null === s && f === w.Hardfork.Merge) {
                        const m = this.hardforks(),
                            _ = m.findIndex(L => null != L.ttd);
                        if (_ < 0) throw Error("Merge hardfork should have been found");
                        s = this.hardforkBlock(m[_ - 1].name)
                    }
                    return null === s ? null : this.hardforks().reduce((m, _) => {
                        const L = BigInt(null === _.block || null != _.ttd ? 0 : _.block);
                        return L > s && null === m ? L : m
                    }, null)
                }
                isNextHardforkBlock(f, s) {
                    f = (0, p.toType)(f, p.TypeOutput.BigInt);
                    const c = this.nextHardforkBlock(s = s ? ? this._hardfork);
                    return null !== c && c === f
                }
                _calcForkHash(f, s) {
                    let c = Buffer.alloc(0),
                        m = 0;
                    for (const F of this.hardforks()) {
                        const {
                            block: Y,
                            timestamp: re,
                            name: V
                        } = F;
                        let X = re ? ? Y;
                        if (X = null !== X ? Number(X) : null, "number" == typeof X && 0 !== X && X !== m && V !== w.Hardfork.Merge) {
                            const q = Buffer.from(X.toString(16).padStart(16, "0"), "hex");
                            c = Buffer.concat([c, q]), m = X
                        }
                        if (F.name === f) break
                    }
                    const _ = Buffer.concat([s, c]);
                    return `0x${(0,p.intToBuffer)((0,l.buf)(_)>>>0).toString("hex")}`
                }
                forkHash(f, s) {
                    const c = this._getHardfork(f = f ? ? this._hardfork);
                    if (null === c || null === c ? .block && void 0 === c ? .timestamp && void 0 === c ? .ttd) throw new Error("No fork hash calculation possible for future hardfork");
                    if (null != c ? .forkHash) return c.forkHash;
                    if (!s) throw new Error("genesisHash required for forkHash calculation");
                    return this._calcForkHash(f, s)
                }
                hardforkForForkHash(f) {
                    const s = this.hardforks().filter(c => c.forkHash === f);
                    return s.length >= 1 ? s[s.length - 1] : null
                }
                setForkHashes(f) {
                    for (const s of this.hardforks()) null == s.forkHash && (null != (s.timestamp ? ? s.block) || typeof s.ttd < "u") && (s.forkHash = this.forkHash(s.name, f))
                }
                genesis() {
                    return this._chainParams.genesis
                }
                hardforks() {
                    return this._chainParams.hardforks
                }
                bootstrapNodes() {
                    return this._chainParams.bootstrapNodes
                }
                dnsNetworks() {
                    return this._chainParams.dnsNetworks
                }
                hardfork() {
                    return this._hardfork
                }
                chainId() {
                    return BigInt(this._chainParams.chainId)
                }
                chainName() {
                    return this._chainParams.name
                }
                networkId() {
                    return BigInt(this._chainParams.networkId)
                }
                eips() {
                    return this._eips
                }
                consensusType() {
                    const f = this.hardfork();
                    let s;
                    for (const c of this.HARDFORK_CHANGES)
                        if ("consensus" in c[1] && (s = c[1].consensus.type), c[0] === f) break;
                    return s ? ? this._chainParams.consensus.type
                }
                consensusAlgorithm() {
                    const f = this.hardfork();
                    let s;
                    for (const c of this.HARDFORK_CHANGES)
                        if ("consensus" in c[1] && (s = c[1].consensus.algorithm), c[0] === f) break;
                    return s ? ? this._chainParams.consensus.algorithm
                }
                consensusConfig() {
                    const f = this.hardfork();
                    let s;
                    for (const c of this.HARDFORK_CHANGES)
                        if ("consensus" in c[1] && (s = c[1].consensus[c[1].consensus.algorithm]), c[0] === f) break;
                    return s ? ? this._chainParams.consensus[this.consensusAlgorithm()] ? ? {}
                }
                copy() {
                    const f = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
                    return f.removeAllListeners(), f
                }
                static _getInitializedChains(f) {
                    const s = {};
                    for (const [m, _] of Object.entries(w.Chain)) s[_] = m.toLowerCase();
                    const c = {
                        mainnet: h,
                        ropsten: B,
                        rinkeby: H,
                        goerli: G,
                        sepolia: Z
                    };
                    if (f)
                        for (const m of f) {
                            const {
                                name: _
                            } = m;
                            s[m.chainId.toString()] = _, c[_] = m
                        }
                    return c.names = s, c
                }
            }
            k.Common = d
        },
        99912: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.EIPs = void 0, k.EIPs = {
                1153: C(64104),
                1559: C(41187),
                2315: C(22643),
                2537: C(77158),
                2565: C(8499),
                2718: C(76796),
                2929: C(18345),
                2930: C(18185),
                3074: C(59579),
                3198: C(40445),
                3529: C(16102),
                3540: C(1800),
                3541: C(22867),
                3554: C(98691),
                3607: C(74519),
                3651: C(37459),
                3670: C(83632),
                3675: C(21794),
                3855: C(27749),
                3860: C(99063),
                4345: C(47113),
                4399: C(59602),
                4844: C(4240),
                4895: C(15357),
                5133: C(84304)
            }
        },
        62620: (K, k) => {
            "use strict";
            var h;
            Object.defineProperty(k, "__esModule", {
                    value: !0
                }), k.CustomChain = k.ConsensusAlgorithm = k.ConsensusType = k.Hardfork = k.Chain = void 0, (h = k.Chain || (k.Chain = {}))[h.Mainnet = 1] = "Mainnet", h[h.Ropsten = 3] = "Ropsten", h[h.Rinkeby = 4] = "Rinkeby", h[h.Goerli = 5] = "Goerli", h[h.Sepolia = 11155111] = "Sepolia",
                function(h) {
                    h.Chainstart = "chainstart", h.Homestead = "homestead", h.Dao = "dao", h.TangerineWhistle = "tangerineWhistle", h.SpuriousDragon = "spuriousDragon", h.Byzantium = "byzantium", h.Constantinople = "constantinople", h.Petersburg = "petersburg", h.Istanbul = "istanbul", h.MuirGlacier = "muirGlacier", h.Berlin = "berlin", h.London = "london", h.ArrowGlacier = "arrowGlacier", h.GrayGlacier = "grayGlacier", h.MergeForkIdTransition = "mergeForkIdTransition", h.Merge = "merge", h.Shanghai = "shanghai", h.ShardingForkDev = "shardingFork"
                }(k.Hardfork || (k.Hardfork = {})),
                function(h) {
                    h.ProofOfStake = "pos", h.ProofOfWork = "pow", h.ProofOfAuthority = "poa"
                }(k.ConsensusType || (k.ConsensusType = {})),
                function(h) {
                    h.Ethash = "ethash", h.Clique = "clique", h.Casper = "casper"
                }(k.ConsensusAlgorithm || (k.ConsensusAlgorithm = {})),
                function(h) {
                    h.PolygonMainnet = "polygon-mainnet", h.PolygonMumbai = "polygon-mumbai", h.ArbitrumRinkebyTestnet = "arbitrum-rinkeby-testnet", h.ArbitrumOne = "arbitrum-one", h.xDaiChain = "x-dai-chain", h.OptimisticKovan = "optimistic-kovan", h.OptimisticEthereum = "optimistic-ethereum"
                }(k.CustomChain || (k.CustomChain = {}))
        },
        35500: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.hardforks = void 0, k.hardforks = {
                chainstart: C(28158),
                homestead: C(45516),
                dao: C(36888),
                tangerineWhistle: C(94350),
                spuriousDragon: C(82146),
                byzantium: C(3099),
                constantinople: C(3068),
                petersburg: C(13385),
                istanbul: C(10208),
                muirGlacier: C(90050),
                berlin: C(15880),
                london: C(73352),
                shanghai: C(30369),
                arrowGlacier: C(24211),
                grayGlacier: C(87184),
                mergeForkIdTransition: C(99402),
                merge: C(977),
                shardingFork: C(7968)
            }
        },
        83843: function(K, k, C) {
            "use strict";
            var p = this && this.__createBinding || (Object.create ? function(A, G, h, H) {
                    void 0 === H && (H = h);
                    var B = Object.getOwnPropertyDescriptor(G, h);
                    (!B || ("get" in B ? !G.__esModule : B.writable || B.configurable)) && (B = {
                        enumerable: !0,
                        get: function() {
                            return G[h]
                        }
                    }), Object.defineProperty(A, H, B)
                } : function(A, G, h, H) {
                    void 0 === H && (H = h), A[H] = G[h]
                }),
                l = this && this.__exportStar || function(A, G) {
                    for (var h in A) "default" !== h && !Object.prototype.hasOwnProperty.call(G, h) && p(G, A, h)
                };
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), l(C(61400), k), l(C(62620), k), l(C(47279), k), l(C(88395), k)
        },
        47279: (K, k) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            })
        },
        88395: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.parseGethGenesis = void 0;
            const p = C(7820),
                l = C(62620);
            k.parseGethGenesis = function h(H, B, Z) {
                try {
                    if (["config", "difficulty", "gasLimit", "alloc"].some(U => !(U in H))) throw new Error("Invalid format, expected geth genesis fields missing");
                    return void 0 !== B && (H.name = B),
                        function G(H, B = !0) {
                            const {
                                name: Z,
                                config: U,
                                difficulty: w,
                                mixHash: O,
                                gasLimit: g,
                                coinbase: d,
                                baseFeePerGas: y
                            } = H;
                            let {
                                extraData: f,
                                timestamp: s,
                                nonce: c
                            } = H;
                            const m = Number(s),
                                {
                                    chainId: _
                                } = U;
                            if ("" === f && (f = "0x"), (0, p.isHexPrefixed)(s) || (s = (0, p.intToHex)(parseInt(s))), 18 !== c.length && (c = function A(H) {
                                    return H && "0x0" !== H ? (0, p.isHexPrefixed)(H) ? "0x" + (0, p.stripHexPrefix)(H).padStart(16, "0") : "0x" + H.padStart(16, "0") : "0x0000000000000000"
                                }(c)), U.eip155Block !== U.eip158Block) throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
                            const L = {
                                    name: Z,
                                    chainId: _,
                                    networkId: _,
                                    genesis: {
                                        timestamp: s,
                                        gasLimit: parseInt(g),
                                        difficulty: parseInt(w),
                                        nonce: c,
                                        extraData: f,
                                        mixHash: O,
                                        coinbase: d,
                                        baseFeePerGas: y
                                    },
                                    hardfork: void 0,
                                    hardforks: [],
                                    bootstrapNodes: [],
                                    consensus: void 0 !== U.clique ? {
                                        type: "poa",
                                        algorithm: "clique",
                                        clique: {
                                            period: U.clique.period ? ? U.clique.blockperiodseconds,
                                            epoch: U.clique.epoch ? ? U.clique.epochlength
                                        }
                                    } : {
                                        type: "pow",
                                        algorithm: "ethash",
                                        ethash: {}
                                    }
                                },
                                F = {
                                    [l.Hardfork.Homestead]: {
                                        name: "homesteadBlock"
                                    },
                                    [l.Hardfork.Dao]: {
                                        name: "daoForkBlock"
                                    },
                                    [l.Hardfork.TangerineWhistle]: {
                                        name: "eip150Block"
                                    },
                                    [l.Hardfork.SpuriousDragon]: {
                                        name: "eip155Block"
                                    },
                                    [l.Hardfork.Byzantium]: {
                                        name: "byzantiumBlock"
                                    },
                                    [l.Hardfork.Constantinople]: {
                                        name: "constantinopleBlock"
                                    },
                                    [l.Hardfork.Petersburg]: {
                                        name: "petersburgBlock"
                                    },
                                    [l.Hardfork.Istanbul]: {
                                        name: "istanbulBlock"
                                    },
                                    [l.Hardfork.MuirGlacier]: {
                                        name: "muirGlacierBlock"
                                    },
                                    [l.Hardfork.Berlin]: {
                                        name: "berlinBlock"
                                    },
                                    [l.Hardfork.London]: {
                                        name: "londonBlock"
                                    },
                                    [l.Hardfork.MergeForkIdTransition]: {
                                        name: "mergeForkBlock",
                                        postMerge: B
                                    },
                                    [l.Hardfork.Shanghai]: {
                                        name: "shanghaiTime",
                                        postMerge: !0,
                                        isTimestamp: !0
                                    },
                                    [l.Hardfork.ShardingForkDev]: {
                                        name: "shardingForkTime",
                                        postMerge: !0,
                                        isTimestamp: !0
                                    }
                                },
                                Y = Object.keys(F).reduce((X, q) => (X[F[q].name] = q, X), {}),
                                re = Object.keys(U).filter(X => void 0 !== Y[X] && null != U[X]);
                            if (L.hardforks = re.map(X => ({
                                    name: Y[X],
                                    block: !0 === F[Y[X]].isTimestamp || "number" != typeof U[X] ? null : U[X],
                                    timestamp: !0 === F[Y[X]].isTimestamp && "number" == typeof U[X] ? U[X] : void 0
                                })).filter(X => null !== X.block || void 0 !== X.timestamp), L.hardforks.sort(function(X, q) {
                                    return (X.block ? ? 1 / 0) - (q.block ? ? 1 / 0)
                                }), L.hardforks.sort(function(X, q) {
                                    return (X.timestamp ? ? m) - (q.timestamp ? ? m)
                                }), void 0 !== U.terminalTotalDifficulty) {
                                const X = {
                                        name: l.Hardfork.Merge,
                                        ttd: U.terminalTotalDifficulty,
                                        block: null
                                    },
                                    q = L.hardforks.findIndex(S => !0 === F[S.name] ? .postMerge); - 1 !== q ? L.hardforks.splice(q, 0, X) : L.hardforks.push(X)
                            }
                            const V = L.hardforks.length > 0 ? L.hardforks.slice(-1)[0] : void 0;
                            return L.hardfork = V ? .name, L.hardforks.unshift({
                                name: l.Hardfork.Chainstart,
                                block: 0
                            }), L
                        }(H, Z)
                } catch (U) {
                    throw new Error(`Error parsing parameters file: ${U.message}`)
                }
            }
        },
        13444: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.BaseTransaction = void 0;
            const p = C(83843),
                l = C(7820),
                A = C(20984),
                G = C(95440);
            k.BaseTransaction = class h {
                constructor(B, Z) {
                    this.cache = {
                        hash: void 0,
                        dataFee: void 0
                    }, this.activeCapabilities = [], this.DEFAULT_CHAIN = p.Chain.Mainnet, this.DEFAULT_HARDFORK = p.Hardfork.Merge;
                    const {
                        nonce: U,
                        gasLimit: w,
                        to: O,
                        value: g,
                        data: d,
                        v: y,
                        r: f,
                        s,
                        type: c
                    } = B;
                    this._type = Number((0, l.bufferToBigInt)((0, l.toBuffer)(c))), this.txOptions = Z;
                    const m = (0, l.toBuffer)("" === O ? "0x" : O),
                        _ = (0, l.toBuffer)("" === y ? "0x" : y),
                        L = (0, l.toBuffer)("" === f ? "0x" : f),
                        F = (0, l.toBuffer)("" === s ? "0x" : s);
                    this.nonce = (0, l.bufferToBigInt)((0, l.toBuffer)("" === U ? "0x" : U)), this.gasLimit = (0, l.bufferToBigInt)((0, l.toBuffer)("" === w ? "0x" : w)), this.to = m.length > 0 ? new l.Address(m) : void 0, this.value = (0, l.bufferToBigInt)((0, l.toBuffer)("" === g ? "0x" : g)), this.data = (0, l.toBuffer)("" === d ? "0x" : d), this.v = _.length > 0 ? (0, l.bufferToBigInt)(_) : void 0, this.r = L.length > 0 ? (0, l.bufferToBigInt)(L) : void 0, this.s = F.length > 0 ? (0, l.bufferToBigInt)(F) : void 0, this._validateCannotExceedMaxInteger({
                        value: this.value,
                        r: this.r,
                        s: this.s
                    }), this._validateCannotExceedMaxInteger({
                        gasLimit: this.gasLimit
                    }, 64), this._validateCannotExceedMaxInteger({
                        nonce: this.nonce
                    }, 64, !0);
                    const Y = null == this.to,
                        re = Z.allowUnlimitedInitCodeSize ? ? !1,
                        V = Z.common ? ? this._getCommon();
                    Y && V.isActivatedEIP(3860) && !1 === re && (0, G.checkMaxInitCodeSize)(V, this.data.length)
                }
                get type() {
                    return this._type
                }
                supports(B) {
                    return this.activeCapabilities.includes(B)
                }
                validate(B = !1) {
                    const Z = [];
                    return this.getBaseFee() > this.gasLimit && Z.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`), this.isSigned() && !this.verifySignature() && Z.push("Invalid Signature"), B ? Z : 0 === Z.length
                }
                _validateYParity() {
                    const {
                        v: B
                    } = this;
                    if (void 0 !== B && B !== BigInt(0) && B !== BigInt(1)) {
                        const Z = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
                        throw new Error(Z)
                    }
                }
                _validateHighS() {
                    const {
                        s: B
                    } = this;
                    if (this.common.gteHardfork("homestead") && void 0 !== B && B > l.SECP256K1_ORDER_DIV_2) {
                        const Z = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
                        throw new Error(Z)
                    }
                }
                getBaseFee() {
                    const B = this.common.param("gasPrices", "tx");
                    let Z = this.getDataFee();
                    if (B && (Z += B), this.common.gteHardfork("homestead") && this.toCreationAddress()) {
                        const U = this.common.param("gasPrices", "txCreation");
                        U && (Z += U)
                    }
                    return Z
                }
                getDataFee() {
                    const B = this.common.param("gasPrices", "txDataZero"),
                        Z = this.common.param("gasPrices", "txDataNonZero");
                    let U = BigInt(0);
                    for (let w = 0; w < this.data.length; w++) U += 0 === this.data[w] ? B : Z;
                    if (null == this.to && this.common.isActivatedEIP(3860)) {
                        const w = BigInt(Math.ceil(this.data.length / 32));
                        U += this.common.param("gasPrices", "initCodeWordCost") * w
                    }
                    return U
                }
                toCreationAddress() {
                    return void 0 === this.to || 0 === this.to.buf.length
                }
                isSigned() {
                    const {
                        v: B,
                        r: Z,
                        s: U
                    } = this;
                    return !(void 0 === B || void 0 === Z || void 0 === U)
                }
                verifySignature() {
                    try {
                        const B = this.getSenderPublicKey();
                        return 0 !== (0, l.unpadBuffer)(B).length
                    } catch {
                        return !1
                    }
                }
                getSenderAddress() {
                    return new l.Address((0, l.publicToAddress)(this.getSenderPublicKey()))
                }
                sign(B) {
                    if (32 !== B.length) {
                        const y = this._errorMsg("Private key must be 32 bytes in length.");
                        throw new Error(y)
                    }
                    let Z = !1;
                    0 === this.type && this.common.gteHardfork("spuriousDragon") && !this.supports(A.Capability.EIP155ReplayProtection) && (this.activeCapabilities.push(A.Capability.EIP155ReplayProtection), Z = !0);
                    const U = this.getMessageToSign(!0),
                        {
                            v: w,
                            r: O,
                            s: g
                        } = (0, l.ecsign)(U, B),
                        d = this._processSignature(w, O, g);
                    if (Z) {
                        const y = this.activeCapabilities.indexOf(A.Capability.EIP155ReplayProtection);
                        y > -1 && this.activeCapabilities.splice(y, 1)
                    }
                    return d
                }
                _getCommon(B, Z) {
                    if (void 0 !== Z) {
                        const U = (0, l.bufferToBigInt)((0, l.toBuffer)(Z));
                        if (B) {
                            if (B.chainId() !== U) {
                                const w = this._errorMsg("The chain ID does not match the chain ID of Common");
                                throw new Error(w)
                            }
                            return B.copy()
                        }
                        return p.Common.isSupportedChainId(U) ? new p.Common({
                            chain: U,
                            hardfork: this.DEFAULT_HARDFORK
                        }) : p.Common.custom({
                            name: "custom-chain",
                            networkId: U,
                            chainId: U
                        }, {
                            baseChain: this.DEFAULT_CHAIN,
                            hardfork: this.DEFAULT_HARDFORK
                        })
                    }
                    return B ? .copy() ? ? new p.Common({
                        chain: this.DEFAULT_CHAIN,
                        hardfork: this.DEFAULT_HARDFORK
                    })
                }
                _validateCannotExceedMaxInteger(B, Z = 256, U = !1) {
                    for (const [w, O] of Object.entries(B)) switch (Z) {
                        case 64:
                            if (U) {
                                if (void 0 !== O && O >= l.MAX_UINT64) {
                                    const g = this._errorMsg(`${w} cannot equal or exceed MAX_UINT64 (2^64-1), given ${O}`);
                                    throw new Error(g)
                                }
                            } else if (void 0 !== O && O > l.MAX_UINT64) {
                                const g = this._errorMsg(`${w} cannot exceed MAX_UINT64 (2^64-1), given ${O}`);
                                throw new Error(g)
                            }
                            break;
                        case 256:
                            if (U) {
                                if (void 0 !== O && O >= l.MAX_INTEGER) {
                                    const g = this._errorMsg(`${w} cannot equal or exceed MAX_INTEGER (2^256-1), given ${O}`);
                                    throw new Error(g)
                                }
                            } else if (void 0 !== O && O > l.MAX_INTEGER) {
                                const g = this._errorMsg(`${w} cannot exceed MAX_INTEGER (2^256-1), given ${O}`);
                                throw new Error(g)
                            }
                            break;
                        default:
                            {
                                const g = this._errorMsg("unimplemented bits value");
                                throw new Error(g)
                            }
                    }
                }
                static _validateNotArray(B) {
                    const Z = ["nonce", "gasPrice", "gasLimit", "to", "value", "data", "v", "r", "s", "type", "baseFee", "maxFeePerGas", "chainId"];
                    for (const [U, w] of Object.entries(B))
                        if (Z.includes(U) && Array.isArray(w)) throw new Error(`${U} cannot be an array`)
                }
                _getSharedErrorPostfix() {
                    let B = "";
                    try {
                        B = this.isSigned() ? (0, l.bufferToHex)(this.hash()) : "not available (unsigned)"
                    } catch {
                        B = "error"
                    }
                    let Z = "";
                    try {
                        Z = this.isSigned().toString()
                    } catch {
                        B = "error"
                    }
                    let U = "";
                    try {
                        U = this.common.hardfork()
                    } catch {
                        U = "error"
                    }
                    let w = `tx type=${this.type} hash=${B} nonce=${this.nonce} value=${this.value} `;
                    return w += `signed=${Z} hf=${U}`, w
                }
            }
        },
        11499: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.FeeMarketEIP1559Transaction = void 0;
            const p = C(11572),
                l = C(7820),
                A = C(20555),
                G = C(13444),
                h = C(95440),
                B = Buffer.from(2..toString(16).padStart(2, "0"), "hex");
            class Z extends G.BaseTransaction {
                constructor(w, O = {}) {
                    super({ ...w,
                        type: 2
                    }, O), this.DEFAULT_HARDFORK = "london";
                    const {
                        chainId: g,
                        accessList: d,
                        maxFeePerGas: y,
                        maxPriorityFeePerGas: f
                    } = w;
                    if (this.common = this._getCommon(O.common, g), this.chainId = this.common.chainId(), !1 === this.common.isActivatedEIP(1559)) throw new Error("EIP-1559 not enabled on Common");
                    this.activeCapabilities = this.activeCapabilities.concat([1559, 2718, 2930]);
                    const s = h.AccessLists.getAccessListData(d ? ? []);
                    if (this.accessList = s.accessList, this.AccessListJSON = s.AccessListJSON, h.AccessLists.verifyAccessList(this.accessList), this.maxFeePerGas = (0, l.bufferToBigInt)((0, l.toBuffer)("" === y ? "0x" : y)), this.maxPriorityFeePerGas = (0, l.bufferToBigInt)((0, l.toBuffer)("" === f ? "0x" : f)), this._validateCannotExceedMaxInteger({
                            maxFeePerGas: this.maxFeePerGas,
                            maxPriorityFeePerGas: this.maxPriorityFeePerGas
                        }), G.BaseTransaction._validateNotArray(w), this.gasLimit * this.maxFeePerGas > l.MAX_INTEGER) {
                        const m = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
                        throw new Error(m)
                    }
                    if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
                        const m = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
                        throw new Error(m)
                    }
                    this._validateYParity(), this._validateHighS(), (O ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(w, O = {}) {
                    return new Z(w, O)
                }
                static fromSerializedTx(w, O = {}) {
                    if (!w.slice(0, 1).equals(B)) throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: 2, received: ${w.slice(0,1).toString("hex")}`);
                    const g = (0, l.arrToBufArr)(p.RLP.decode(w.slice(1)));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input: must be array");
                    return Z.fromValuesArray(g, O)
                }
                static fromValuesArray(w, O = {}) {
                    if (9 !== w.length && 12 !== w.length) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
                    const [g, d, y, f, s, c, m, _, L, F, Y, re] = w;
                    return this._validateNotArray({
                        chainId: g,
                        v: F
                    }), (0, l.validateNoLeadingZeroes)({
                        nonce: d,
                        maxPriorityFeePerGas: y,
                        maxFeePerGas: f,
                        gasLimit: s,
                        value: m,
                        v: F,
                        r: Y,
                        s: re
                    }), new Z({
                        chainId: (0, l.bufferToBigInt)(g),
                        nonce: d,
                        maxPriorityFeePerGas: y,
                        maxFeePerGas: f,
                        gasLimit: s,
                        to: c,
                        value: m,
                        data: _,
                        accessList: L ? ? [],
                        v: void 0 !== F ? (0, l.bufferToBigInt)(F) : void 0,
                        r: Y,
                        s: re
                    }, O)
                }
                getDataFee() {
                    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                    let w = super.getDataFee();
                    return w += BigInt(h.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
                        value: w,
                        hardfork: this.common.hardfork()
                    }), w
                }
                getUpfrontCost(w = BigInt(0)) {
                    const O = this.maxPriorityFeePerGas,
                        g = this.maxFeePerGas - w;
                    return this.gasLimit * ((O < g ? O : g) + w) + this.value
                }
                raw() {
                    return [(0, l.bigIntToUnpaddedBuffer)(this.chainId), (0, l.bigIntToUnpaddedBuffer)(this.nonce), (0, l.bigIntToUnpaddedBuffer)(this.maxPriorityFeePerGas), (0, l.bigIntToUnpaddedBuffer)(this.maxFeePerGas), (0, l.bigIntToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, l.bigIntToUnpaddedBuffer)(this.value), this.data, this.accessList, void 0 !== this.v ? (0, l.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, l.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, l.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])]
                }
                serialize() {
                    const w = this.raw();
                    return Buffer.concat([B, Buffer.from(p.RLP.encode((0, l.bufArrToArr)(w)))])
                }
                getMessageToSign(w = !0) {
                    const O = this.raw().slice(0, 9),
                        g = Buffer.concat([B, Buffer.from(p.RLP.encode((0, l.bufArrToArr)(O)))]);
                    return w ? Buffer.from((0, A.keccak256)(g)) : g
                }
                hash() {
                    if (!this.isSigned()) {
                        const w = this._errorMsg("Cannot call hash method if transaction is not signed");
                        throw new Error(w)
                    }
                    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Buffer.from((0, A.keccak256)(this.serialize()))), this.cache.hash) : Buffer.from((0, A.keccak256)(this.serialize()))
                }
                getMessageToVerifySignature() {
                    return this.getMessageToSign()
                }
                getSenderPublicKey() {
                    if (!this.isSigned()) {
                        const y = this._errorMsg("Cannot call this method if transaction is not signed");
                        throw new Error(y)
                    }
                    const w = this.getMessageToVerifySignature(),
                        {
                            v: O,
                            r: g,
                            s: d
                        } = this;
                    this._validateHighS();
                    try {
                        return (0, l.ecrecover)(w, O + BigInt(27), (0, l.bigIntToUnpaddedBuffer)(g), (0, l.bigIntToUnpaddedBuffer)(d))
                    } catch {
                        const f = this._errorMsg("Invalid Signature");
                        throw new Error(f)
                    }
                }
                _processSignature(w, O, g) {
                    const d = { ...this.txOptions,
                        common: this.common
                    };
                    return Z.fromTxData({
                        chainId: this.chainId,
                        nonce: this.nonce,
                        maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                        maxFeePerGas: this.maxFeePerGas,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        accessList: this.accessList,
                        v: w - BigInt(27),
                        r: (0, l.bufferToBigInt)(O),
                        s: (0, l.bufferToBigInt)(g)
                    }, d)
                }
                toJSON() {
                    const w = h.AccessLists.getAccessListJSON(this.accessList);
                    return {
                        chainId: (0, l.bigIntToHex)(this.chainId),
                        nonce: (0, l.bigIntToHex)(this.nonce),
                        maxPriorityFeePerGas: (0, l.bigIntToHex)(this.maxPriorityFeePerGas),
                        maxFeePerGas: (0, l.bigIntToHex)(this.maxFeePerGas),
                        gasLimit: (0, l.bigIntToHex)(this.gasLimit),
                        to: void 0 !== this.to ? this.to.toString() : void 0,
                        value: (0, l.bigIntToHex)(this.value),
                        data: "0x" + this.data.toString("hex"),
                        accessList: w,
                        v: void 0 !== this.v ? (0, l.bigIntToHex)(this.v) : void 0,
                        r: void 0 !== this.r ? (0, l.bigIntToHex)(this.r) : void 0,
                        s: void 0 !== this.s ? (0, l.bigIntToHex)(this.s) : void 0
                    }
                }
                errorStr() {
                    let w = this._getSharedErrorPostfix();
                    return w += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`, w
                }
                _errorMsg(w) {
                    return `${w} (${this.errorStr()})`
                }
            }
            k.FeeMarketEIP1559Transaction = Z
        },
        17733: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.AccessListEIP2930Transaction = void 0;
            const p = C(11572),
                l = C(7820),
                A = C(20555),
                G = C(13444),
                h = C(95440),
                B = Buffer.from(1..toString(16).padStart(2, "0"), "hex");
            class Z extends G.BaseTransaction {
                constructor(w, O = {}) {
                    super({ ...w,
                        type: 1
                    }, O), this.DEFAULT_HARDFORK = "berlin";
                    const {
                        chainId: g,
                        accessList: d,
                        gasPrice: y
                    } = w;
                    if (this.common = this._getCommon(O.common, g), this.chainId = this.common.chainId(), !this.common.isActivatedEIP(2930)) throw new Error("EIP-2930 not enabled on Common");
                    this.activeCapabilities = this.activeCapabilities.concat([2718, 2930]);
                    const f = h.AccessLists.getAccessListData(d ? ? []);
                    if (this.accessList = f.accessList, this.AccessListJSON = f.AccessListJSON, h.AccessLists.verifyAccessList(this.accessList), this.gasPrice = (0, l.bufferToBigInt)((0, l.toBuffer)("" === y ? "0x" : y)), this._validateCannotExceedMaxInteger({
                            gasPrice: this.gasPrice
                        }), G.BaseTransaction._validateNotArray(w), this.gasPrice * this.gasLimit > l.MAX_INTEGER) {
                        const c = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
                        throw new Error(c)
                    }
                    this._validateYParity(), this._validateHighS(), (O ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(w, O = {}) {
                    return new Z(w, O)
                }
                static fromSerializedTx(w, O = {}) {
                    if (!w.slice(0, 1).equals(B)) throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: 1, received: ${w.slice(0,1).toString("hex")}`);
                    const g = (0, l.arrToBufArr)(p.RLP.decode(Uint8Array.from(w.slice(1))));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input: must be array");
                    return Z.fromValuesArray(g, O)
                }
                static fromValuesArray(w, O = {}) {
                    if (8 !== w.length && 11 !== w.length) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
                    const [g, d, y, f, s, c, m, _, L, F, Y] = w;
                    return this._validateNotArray({
                        chainId: g,
                        v: L
                    }), (0, l.validateNoLeadingZeroes)({
                        nonce: d,
                        gasPrice: y,
                        gasLimit: f,
                        value: c,
                        v: L,
                        r: F,
                        s: Y
                    }), new Z({
                        chainId: (0, l.bufferToBigInt)(g),
                        nonce: d,
                        gasPrice: y,
                        gasLimit: f,
                        to: s,
                        value: c,
                        data: m,
                        accessList: _ ? ? [],
                        v: void 0 !== L ? (0, l.bufferToBigInt)(L) : void 0,
                        r: F,
                        s: Y
                    }, O)
                }
                getDataFee() {
                    if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
                    let w = super.getDataFee();
                    return w += BigInt(h.AccessLists.getDataFeeEIP2930(this.accessList, this.common)), Object.isFrozen(this) && (this.cache.dataFee = {
                        value: w,
                        hardfork: this.common.hardfork()
                    }), w
                }
                getUpfrontCost() {
                    return this.gasLimit * this.gasPrice + this.value
                }
                raw() {
                    return [(0, l.bigIntToUnpaddedBuffer)(this.chainId), (0, l.bigIntToUnpaddedBuffer)(this.nonce), (0, l.bigIntToUnpaddedBuffer)(this.gasPrice), (0, l.bigIntToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, l.bigIntToUnpaddedBuffer)(this.value), this.data, this.accessList, void 0 !== this.v ? (0, l.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, l.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, l.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])]
                }
                serialize() {
                    const w = this.raw();
                    return Buffer.concat([B, Buffer.from(p.RLP.encode((0, l.bufArrToArr)(w)))])
                }
                getMessageToSign(w = !0) {
                    const O = this.raw().slice(0, 8),
                        g = Buffer.concat([B, Buffer.from(p.RLP.encode((0, l.bufArrToArr)(O)))]);
                    return w ? Buffer.from((0, A.keccak256)(g)) : g
                }
                hash() {
                    if (!this.isSigned()) {
                        const w = this._errorMsg("Cannot call hash method if transaction is not signed");
                        throw new Error(w)
                    }
                    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Buffer.from((0, A.keccak256)(this.serialize()))), this.cache.hash) : Buffer.from((0, A.keccak256)(this.serialize()))
                }
                getMessageToVerifySignature() {
                    return this.getMessageToSign()
                }
                getSenderPublicKey() {
                    if (!this.isSigned()) {
                        const y = this._errorMsg("Cannot call this method if transaction is not signed");
                        throw new Error(y)
                    }
                    const w = this.getMessageToVerifySignature(),
                        {
                            v: O,
                            r: g,
                            s: d
                        } = this;
                    this._validateHighS();
                    try {
                        return (0, l.ecrecover)(w, O + BigInt(27), (0, l.bigIntToUnpaddedBuffer)(g), (0, l.bigIntToUnpaddedBuffer)(d))
                    } catch {
                        const f = this._errorMsg("Invalid Signature");
                        throw new Error(f)
                    }
                }
                _processSignature(w, O, g) {
                    const d = { ...this.txOptions,
                        common: this.common
                    };
                    return Z.fromTxData({
                        chainId: this.chainId,
                        nonce: this.nonce,
                        gasPrice: this.gasPrice,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        accessList: this.accessList,
                        v: w - BigInt(27),
                        r: (0, l.bufferToBigInt)(O),
                        s: (0, l.bufferToBigInt)(g)
                    }, d)
                }
                toJSON() {
                    const w = h.AccessLists.getAccessListJSON(this.accessList);
                    return {
                        chainId: (0, l.bigIntToHex)(this.chainId),
                        nonce: (0, l.bigIntToHex)(this.nonce),
                        gasPrice: (0, l.bigIntToHex)(this.gasPrice),
                        gasLimit: (0, l.bigIntToHex)(this.gasLimit),
                        to: void 0 !== this.to ? this.to.toString() : void 0,
                        value: (0, l.bigIntToHex)(this.value),
                        data: "0x" + this.data.toString("hex"),
                        accessList: w,
                        v: void 0 !== this.v ? (0, l.bigIntToHex)(this.v) : void 0,
                        r: void 0 !== this.r ? (0, l.bigIntToHex)(this.r) : void 0,
                        s: void 0 !== this.s ? (0, l.bigIntToHex)(this.s) : void 0
                    }
                }
                errorStr() {
                    let w = this._getSharedErrorPostfix();
                    return w += ` gasPrice=${this.gasPrice} accessListCount=${this.accessList?.length??0}`, w
                }
                _errorMsg(w) {
                    return `${w} (${this.errorStr()})`
                }
            }
            k.AccessListEIP2930Transaction = Z
        },
        53136: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.normalizeTxParams = void 0;
            const p = C(7820);
            k.normalizeTxParams = A => {
                const G = Object.assign({}, A);
                return G.gasLimit = (0, p.toType)(G.gasLimit ? ? G.gas, p.TypeOutput.BigInt), G.data = void 0 === G.data ? G.input : G.data, G.gasPrice = void 0 !== G.gasPrice ? BigInt(G.gasPrice) : void 0, G.value = void 0 !== G.value ? BigInt(G.value) : void 0, G.to = null != G.to ? (0, p.setLengthLeft)((0, p.toBuffer)(G.to), 20) : null, G.v = "0x0" === G.v ? "0x" : G.v, G.r = "0x0" === G.r ? "0x" : G.r, G.s = "0x0" === G.s ? "0x" : G.s, "0x" !== G.v && (G.v = (0, p.toType)(G.v, p.TypeOutput.BigInt)), G
            }
        },
        83571: function(K, k, C) {
            "use strict";
            var p = this && this.__createBinding || (Object.create ? function(B, Z, U, w) {
                    void 0 === w && (w = U);
                    var O = Object.getOwnPropertyDescriptor(Z, U);
                    (!O || ("get" in O ? !Z.__esModule : O.writable || O.configurable)) && (O = {
                        enumerable: !0,
                        get: function() {
                            return Z[U]
                        }
                    }), Object.defineProperty(B, w, O)
                } : function(B, Z, U, w) {
                    void 0 === w && (w = U), B[w] = Z[U]
                }),
                l = this && this.__exportStar || function(B, Z) {
                    for (var U in B) "default" !== U && !Object.prototype.hasOwnProperty.call(Z, U) && p(Z, B, U)
                };
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.TransactionFactory = k.Transaction = k.AccessListEIP2930Transaction = k.FeeMarketEIP1559Transaction = void 0;
            var A = C(11499);
            Object.defineProperty(k, "FeeMarketEIP1559Transaction", {
                enumerable: !0,
                get: function() {
                    return A.FeeMarketEIP1559Transaction
                }
            });
            var G = C(17733);
            Object.defineProperty(k, "AccessListEIP2930Transaction", {
                enumerable: !0,
                get: function() {
                    return G.AccessListEIP2930Transaction
                }
            });
            var h = C(90982);
            Object.defineProperty(k, "Transaction", {
                enumerable: !0,
                get: function() {
                    return h.Transaction
                }
            });
            var H = C(3263);
            Object.defineProperty(k, "TransactionFactory", {
                enumerable: !0,
                get: function() {
                    return H.TransactionFactory
                }
            }), l(C(20984), k)
        },
        90982: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.Transaction = void 0;
            const p = C(11572),
                l = C(7820),
                A = C(20555),
                G = C(13444),
                h = C(20984);

            function B(U, w) {
                const O = Number(U),
                    g = 2 * Number(w);
                return O === g + 35 || O === g + 36
            }
            class Z extends G.BaseTransaction {
                constructor(w, O = {}) {
                    if (super({ ...w,
                            type: 0
                        }, O), this.common = this._validateTxV(this.v, O.common), this.gasPrice = (0, l.bufferToBigInt)((0, l.toBuffer)("" === w.gasPrice ? "0x" : w.gasPrice)), this.gasPrice * this.gasLimit > l.MAX_INTEGER) {
                        const d = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
                        throw new Error(d)
                    }
                    this._validateCannotExceedMaxInteger({
                        gasPrice: this.gasPrice
                    }), G.BaseTransaction._validateNotArray(w), this.common.gteHardfork("spuriousDragon") && (this.isSigned() ? B(this.v, this.common.chainId()) && this.activeCapabilities.push(h.Capability.EIP155ReplayProtection) : this.activeCapabilities.push(h.Capability.EIP155ReplayProtection)), (O ? .freeze ? ? 1) && Object.freeze(this)
                }
                static fromTxData(w, O = {}) {
                    return new Z(w, O)
                }
                static fromSerializedTx(w, O = {}) {
                    const g = (0, l.arrToBufArr)(p.RLP.decode(Uint8Array.from(w)));
                    if (!Array.isArray(g)) throw new Error("Invalid serialized tx input. Must be array");
                    return this.fromValuesArray(g, O)
                }
                static fromValuesArray(w, O = {}) {
                    if (6 !== w.length && 9 !== w.length) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
                    const [g, d, y, f, s, c, m, _, L] = w;
                    return (0, l.validateNoLeadingZeroes)({
                        nonce: g,
                        gasPrice: d,
                        gasLimit: y,
                        value: s,
                        v: m,
                        r: _,
                        s: L
                    }), new Z({
                        nonce: g,
                        gasPrice: d,
                        gasLimit: y,
                        to: f,
                        value: s,
                        data: c,
                        v: m,
                        r: _,
                        s: L
                    }, O)
                }
                raw() {
                    return [(0, l.bigIntToUnpaddedBuffer)(this.nonce), (0, l.bigIntToUnpaddedBuffer)(this.gasPrice), (0, l.bigIntToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, l.bigIntToUnpaddedBuffer)(this.value), this.data, void 0 !== this.v ? (0, l.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]), void 0 !== this.r ? (0, l.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]), void 0 !== this.s ? (0, l.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])]
                }
                serialize() {
                    return Buffer.from(p.RLP.encode((0, l.bufArrToArr)(this.raw())))
                }
                _getMessageToSign() {
                    const w = [(0, l.bigIntToUnpaddedBuffer)(this.nonce), (0, l.bigIntToUnpaddedBuffer)(this.gasPrice), (0, l.bigIntToUnpaddedBuffer)(this.gasLimit), void 0 !== this.to ? this.to.buf : Buffer.from([]), (0, l.bigIntToUnpaddedBuffer)(this.value), this.data];
                    return this.supports(h.Capability.EIP155ReplayProtection) && (w.push((0, l.bigIntToUnpaddedBuffer)(this.common.chainId())), w.push((0, l.unpadBuffer)((0, l.toBuffer)(0))), w.push((0, l.unpadBuffer)((0, l.toBuffer)(0)))), w
                }
                getMessageToSign(w = !0) {
                    const O = this._getMessageToSign();
                    return w ? Buffer.from((0, A.keccak256)(p.RLP.encode((0, l.bufArrToArr)(O)))) : O
                }
                getDataFee() {
                    return this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork() ? this.cache.dataFee.value : (Object.isFrozen(this) && (this.cache.dataFee = {
                        value: super.getDataFee(),
                        hardfork: this.common.hardfork()
                    }), super.getDataFee())
                }
                getUpfrontCost() {
                    return this.gasLimit * this.gasPrice + this.value
                }
                hash() {
                    if (!this.isSigned()) {
                        const w = this._errorMsg("Cannot call hash method if transaction is not signed");
                        throw new Error(w)
                    }
                    return Object.isFrozen(this) ? (this.cache.hash || (this.cache.hash = Buffer.from((0, A.keccak256)(p.RLP.encode((0, l.bufArrToArr)(this.raw()))))), this.cache.hash) : Buffer.from((0, A.keccak256)(p.RLP.encode((0, l.bufArrToArr)(this.raw()))))
                }
                getMessageToVerifySignature() {
                    if (!this.isSigned()) {
                        const O = this._errorMsg("This transaction is not signed");
                        throw new Error(O)
                    }
                    const w = this._getMessageToSign();
                    return Buffer.from((0, A.keccak256)(p.RLP.encode((0, l.bufArrToArr)(w))))
                }
                getSenderPublicKey() {
                    const w = this.getMessageToVerifySignature(),
                        {
                            v: O,
                            r: g,
                            s: d
                        } = this;
                    this._validateHighS();
                    try {
                        return (0, l.ecrecover)(w, O, (0, l.bigIntToUnpaddedBuffer)(g), (0, l.bigIntToUnpaddedBuffer)(d), this.supports(h.Capability.EIP155ReplayProtection) ? this.common.chainId() : void 0)
                    } catch {
                        const f = this._errorMsg("Invalid Signature");
                        throw new Error(f)
                    }
                }
                _processSignature(w, O, g) {
                    this.supports(h.Capability.EIP155ReplayProtection) && (w += this.common.chainId() * BigInt(2) + BigInt(8));
                    const d = { ...this.txOptions,
                        common: this.common
                    };
                    return Z.fromTxData({
                        nonce: this.nonce,
                        gasPrice: this.gasPrice,
                        gasLimit: this.gasLimit,
                        to: this.to,
                        value: this.value,
                        data: this.data,
                        v: w,
                        r: (0, l.bufferToBigInt)(O),
                        s: (0, l.bufferToBigInt)(g)
                    }, d)
                }
                toJSON() {
                    return {
                        nonce: (0, l.bigIntToHex)(this.nonce),
                        gasPrice: (0, l.bigIntToHex)(this.gasPrice),
                        gasLimit: (0, l.bigIntToHex)(this.gasLimit),
                        to: void 0 !== this.to ? this.to.toString() : void 0,
                        value: (0, l.bigIntToHex)(this.value),
                        data: "0x" + this.data.toString("hex"),
                        v: void 0 !== this.v ? (0, l.bigIntToHex)(this.v) : void 0,
                        r: void 0 !== this.r ? (0, l.bigIntToHex)(this.r) : void 0,
                        s: void 0 !== this.s ? (0, l.bigIntToHex)(this.s) : void 0
                    }
                }
                _validateTxV(w, O) {
                    let g;
                    const d = void 0 !== w ? Number(w) : void 0;
                    if (void 0 !== d && d < 37 && 27 !== d && 28 !== d) throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${d}`);
                    if (void 0 !== d && 0 !== d && (!O || O.gteHardfork("spuriousDragon")) && 27 !== d && 28 !== d)
                        if (O) {
                            if (!B(BigInt(d), O.chainId())) throw new Error(`Incompatible EIP155-based V ${d} and chain id ${O.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`)
                        } else {
                            let y;
                            y = (d - 35) % 2 == 0 ? 35 : 36, g = BigInt(d - y) / BigInt(2)
                        }
                    return this._getCommon(O, g)
                }
                errorStr() {
                    let w = this._getSharedErrorPostfix();
                    return w += ` gasPrice=${this.gasPrice}`, w
                }
                _errorMsg(w) {
                    return `${w} (${this.errorStr()})`
                }
            }
            k.Transaction = Z
        },
        3263: (K, k, C) => {
            "use strict";
            var p = C(59344).default;
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.TransactionFactory = void 0;
            const l = C(7820),
                A = C(11499),
                G = C(17733),
                h = C(53136),
                H = C(90982);
            class B {
                constructor() {}
                static fromTxData(U, w = {}) {
                    if (!("type" in U) || void 0 === U.type) return H.Transaction.fromTxData(U, w); {
                        const O = Number((0, l.bufferToBigInt)((0, l.toBuffer)(U.type)));
                        if (0 === O) return H.Transaction.fromTxData(U, w);
                        if (1 === O) return G.AccessListEIP2930Transaction.fromTxData(U, w);
                        if (2 === O) return A.FeeMarketEIP1559Transaction.fromTxData(U, w);
                        throw new Error(`Tx instantiation with type ${O} not supported`)
                    }
                }
                static fromSerializedData(U, w = {}) {
                    if (!(U[0] <= 127)) return H.Transaction.fromSerializedTx(U, w);
                    switch (U[0]) {
                        case 1:
                            return G.AccessListEIP2930Transaction.fromSerializedTx(U, w);
                        case 2:
                            return A.FeeMarketEIP1559Transaction.fromSerializedTx(U, w);
                        default:
                            throw new Error(`TypedTransaction with ID ${U[0]} unknown`)
                    }
                }
                static fromBlockBodyData(U, w = {}) {
                    if (Buffer.isBuffer(U)) return this.fromSerializedData(U, w);
                    if (Array.isArray(U)) return H.Transaction.fromValuesArray(U, w);
                    throw new Error("Cannot decode transaction: unknown type input")
                }
                static fromEthersProvider(U, w, O) {
                    return p(function*() {
                        const g = (0, l.getProvider)(U),
                            d = yield(0, l.fetchFromProvider)(g, {
                                method: "eth_getTransactionByHash",
                                params: [w]
                            });
                        if (null === d) throw new Error("No data returned from provider");
                        return B.fromRPCTx(d, O)
                    })()
                }
                static fromRPCTx(U, w = {}) {
                    return p(function*() {
                        return B.fromTxData((0, h.normalizeTxParams)(U), w)
                    })()
                }
            }
            k.TransactionFactory = B
        },
        20984: (K, k) => {
            "use strict";
            var A;

            function p(A) {
                return 0 === A.length || !!Array.isArray(A[0])
            }
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.isAccessList = k.isAccessListBuffer = k.Capability = void 0, (A = k.Capability || (k.Capability = {}))[A.EIP155ReplayProtection = 155] = "EIP155ReplayProtection", A[A.EIP1559FeeMarket = 1559] = "EIP1559FeeMarket", A[A.EIP2718TypedTransaction = 2718] = "EIP2718TypedTransaction", A[A.EIP2930AccessLists = 2930] = "EIP2930AccessLists", k.isAccessListBuffer = p, k.isAccessList = function l(A) {
                return !p(A)
            }
        },
        95440: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.AccessLists = k.checkMaxInitCodeSize = void 0;
            const p = C(7820),
                l = C(20984);
            k.checkMaxInitCodeSize = function A(h, H) {
                const B = h.param("vm", "maxInitCodeSize");
                if (B && BigInt(H) > B) throw new Error(`the initcode size of this transaction is too large: it is ${H} while the max is ${h.param("vm","maxInitCodeSize")}`)
            }, k.AccessLists = class G {
                static getAccessListData(H) {
                    let B, Z;
                    if ((0, l.isAccessList)(H)) {
                        B = H;
                        const U = [];
                        for (let w = 0; w < H.length; w++) {
                            const O = H[w],
                                g = (0, p.toBuffer)(O.address),
                                d = [];
                            for (let y = 0; y < O.storageKeys.length; y++) d.push((0, p.toBuffer)(O.storageKeys[y]));
                            U.push([g, d])
                        }
                        Z = U
                    } else {
                        Z = H ? ? [];
                        const U = [];
                        for (let w = 0; w < Z.length; w++) {
                            const O = Z[w],
                                g = (0, p.bufferToHex)(O[0]),
                                d = [];
                            for (let f = 0; f < O[1].length; f++) d.push((0, p.bufferToHex)(O[1][f]));
                            U.push({
                                address: g,
                                storageKeys: d
                            })
                        }
                        B = U
                    }
                    return {
                        AccessListJSON: B,
                        accessList: Z
                    }
                }
                static verifyAccessList(H) {
                    for (let B = 0; B < H.length; B++) {
                        const Z = H[B],
                            U = Z[0],
                            w = Z[1];
                        if (void 0 !== Z[2]) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
                        if (20 !== U.length) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
                        for (let O = 0; O < w.length; O++)
                            if (32 !== w[O].length) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")
                    }
                }
                static getAccessListJSON(H) {
                    const B = [];
                    for (let Z = 0; Z < H.length; Z++) {
                        const U = H[Z],
                            w = {
                                address: "0x" + (0, p.setLengthLeft)(U[0], 20).toString("hex"),
                                storageKeys: []
                            },
                            O = U[1];
                        for (let g = 0; g < O.length; g++) w.storageKeys.push("0x" + (0, p.setLengthLeft)(O[g], 32).toString("hex"));
                        B.push(w)
                    }
                    return B
                }
                static getDataFeeEIP2930(H, B) {
                    const Z = B.param("gasPrices", "accessListStorageKeyCost"),
                        U = B.param("gasPrices", "accessListAddressCost");
                    let w = 0;
                    for (let g = 0; g < H.length; g++) w += H[g][1].length;
                    return H.length * Number(U) + w * Number(Z)
                }
            }
        },
        51618: function(K, k, C) {
            "use strict";
            var p = this && this.__createBinding || (Object.create ? function(d, y, f, s) {
                    void 0 === s && (s = f);
                    var c = Object.getOwnPropertyDescriptor(y, f);
                    (!c || ("get" in c ? !y.__esModule : c.writable || c.configurable)) && (c = {
                        enumerable: !0,
                        get: function() {
                            return y[f]
                        }
                    }), Object.defineProperty(d, s, c)
                } : function(d, y, f, s) {
                    void 0 === s && (s = f), d[s] = y[f]
                }),
                l = this && this.__setModuleDefault || (Object.create ? function(d, y) {
                    Object.defineProperty(d, "default", {
                        enumerable: !0,
                        value: y
                    })
                } : function(d, y) {
                    d.default = y
                }),
                A = this && this.__importStar || function(d) {
                    if (d && d.__esModule) return d;
                    var y = {};
                    if (null != d)
                        for (var f in d) "default" !== f && Object.prototype.hasOwnProperty.call(d, f) && p(y, d, f);
                    return l(y, d), y
                };
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.getEncryptionPublicKey = k.decryptSafely = k.decrypt = k.encryptSafely = k.encrypt = void 0;
            const G = A(C(76543)),
                h = A(C(14069)),
                H = C(26690);

            function B({
                publicKey: d,
                data: y,
                version: f
            }) {
                if ((0, H.isNullish)(d)) throw new Error("Missing publicKey parameter");
                if ((0, H.isNullish)(y)) throw new Error("Missing data parameter");
                if ((0, H.isNullish)(f)) throw new Error("Missing version parameter");
                if ("x25519-xsalsa20-poly1305" === f) {
                    if ("string" != typeof y) throw new Error("Message data must be given as a string");
                    const s = G.box.keyPair();
                    let c;
                    try {
                        c = h.decodeBase64(d)
                    } catch {
                        throw new Error("Bad public key")
                    }
                    const m = h.decodeUTF8(y),
                        _ = G.randomBytes(G.box.nonceLength),
                        L = G.box(m, _, c, s.secretKey);
                    return {
                        version: "x25519-xsalsa20-poly1305",
                        nonce: h.encodeBase64(_),
                        ephemPublicKey: h.encodeBase64(s.publicKey),
                        ciphertext: h.encodeBase64(L)
                    }
                }
                throw new Error("Encryption type/version not supported")
            }

            function U({
                encryptedData: d,
                privateKey: y
            }) {
                if ((0, H.isNullish)(d)) throw new Error("Missing encryptedData parameter");
                if ((0, H.isNullish)(y)) throw new Error("Missing privateKey parameter");
                if ("x25519-xsalsa20-poly1305" === d.version) {
                    const f = g(y),
                        s = G.box.keyPair.fromSecretKey(f).secretKey,
                        c = h.decodeBase64(d.nonce),
                        m = h.decodeBase64(d.ciphertext),
                        _ = h.decodeBase64(d.ephemPublicKey),
                        L = G.box.open(m, c, _, s);
                    try {
                        if (!L) throw new Error;
                        const F = h.encodeUTF8(L);
                        if (!F) throw new Error;
                        return F
                    } catch (F) {
                        throw F && "string" == typeof F.message && F.message.length ? new Error(`Decryption failed: ${F.message}`) : new Error("Decryption failed.")
                    }
                }
                throw new Error("Encryption type/version not supported.")
            }

            function g(d) {
                const y = Buffer.from(d, "hex").toString("base64");
                return h.decodeBase64(y)
            }
            k.encrypt = B, k.encryptSafely = function Z({
                publicKey: d,
                data: y,
                version: f
            }) {
                if ((0, H.isNullish)(d)) throw new Error("Missing publicKey parameter");
                if ((0, H.isNullish)(y)) throw new Error("Missing data parameter");
                if ((0, H.isNullish)(f)) throw new Error("Missing version parameter");
                if ("object" == typeof y && y && "toJSON" in y) throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
                const m = {
                        data: y,
                        padding: ""
                    },
                    L = Buffer.byteLength(JSON.stringify(m), "utf-8") % 2048;
                let F = 0;
                return L > 0 && (F = 2048 - L - 16), m.padding = "0".repeat(F), B({
                    publicKey: d,
                    data: JSON.stringify(m),
                    version: f
                })
            }, k.decrypt = U, k.decryptSafely = function w({
                encryptedData: d,
                privateKey: y
            }) {
                if ((0, H.isNullish)(d)) throw new Error("Missing encryptedData parameter");
                if ((0, H.isNullish)(y)) throw new Error("Missing privateKey parameter");
                return JSON.parse(U({
                    encryptedData: d,
                    privateKey: y
                })).data
            }, k.getEncryptionPublicKey = function O(d) {
                const y = g(d),
                    f = G.box.keyPair.fromSecretKey(y).publicKey;
                return h.encodeBase64(f)
            }
        },
        91864: function(K, k, C) {
            "use strict";
            var p = this && this.__importDefault || function(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            };
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.rawEncode = k.parseNumber = k.solidityPack = void 0;
            const l = C(7820),
                A = p(C(53882)),
                G = C(18041),
                h = C(26690);

            function B(c) {
                return c.endsWith("]")
            }

            function Z(c) {
                const m = c.match(/(.*)\[(.*?)\]$/u);
                return m ? "" === m[2] ? "dynamic" : parseInt(m[2], 10) : null
            }

            function U(c) {
                const m = /^\D+(\d+)$/u.exec(c);
                if (null === m) throw new Error(`Invalid parseTypeN input "${c}".`);
                return parseInt(m[1], 10)
            }

            function w(c) {
                const m = typeof c;
                if ("string" === m) return (0, l.isHexPrefixed)(c) ? new A.default((0, G.stripHexPrefix)(c), 16) : new A.default(c, 10);
                if ("number" === m) return new A.default(c);
                if (c && Object.prototype.hasOwnProperty.call(c, "toArray") || A.default.isBN(c)) return c;
                throw new Error("Argument is not a number")
            }

            function O(c, m, _) {
                if (B(c)) {
                    const L = c.replace(/\[.*?\]/u, "");
                    if (!B(L)) {
                        const Y = Z(c);
                        if ("dynamic" !== Y && 0 !== Y && null !== Y && m.length > Y) throw new Error(`Elements exceed array size: ${Y}`)
                    }
                    const F = m.map(Y => O(L, Y, 256));
                    return Buffer.concat(F)
                }
                if ("bytes" === c) return m;
                if ("string" === c) return Buffer.from(m, "utf8");
                if ("bool" === c) {
                    _ = _ || 8;
                    const L = Array(_ / 4).join("0");
                    return Buffer.from(m ? `${L}1` : `${L}0`, "hex")
                }
                if ("address" === c) {
                    let L = 20;
                    return _ && (L = _ / 8), (0, l.setLengthLeft)((0, l.toBuffer)(m), L)
                }
                if (c.startsWith("bytes")) {
                    const L = U(c);
                    if (L < 1 || L > 32) throw new Error(`Invalid bytes<N> width: ${L}`);
                    return "number" == typeof m && (m = (0, h.normalize)(m)), (0, l.setLengthRight)((0, l.toBuffer)(m), L)
                }
                if (c.startsWith("uint")) {
                    const L = U(c);
                    if (L % 8 || L < 8 || L > 256) throw new Error(`Invalid uint<N> width: ${L}`);
                    const F = w(m);
                    if (F.bitLength() > L) throw new Error(`Supplied uint exceeds width: ${L} vs ${F.bitLength()}`);
                    return _ = _ || L, F.toArrayLike(Buffer, "be", _ / 8)
                }
                if (c.startsWith("int")) {
                    const L = U(c);
                    if (L % 8 || L < 8 || L > 256) throw new Error(`Invalid int<N> width: ${L}`);
                    const F = w(m);
                    if (F.bitLength() > L) throw new Error(`Supplied int exceeds width: ${L} vs ${F.bitLength()}`);
                    return _ = _ || L, F.toTwos(L).toArrayLike(Buffer, "be", _ / 8)
                }
                throw new Error(`Unsupported or invalid type: ${JSON.stringify(c)}`)
            }

            function g(c) {
                return c.startsWith("int[") ? `int256${c.slice(3)}` : "int" === c ? "int256" : c.startsWith("uint[") ? `uint256${c.slice(4)}` : "uint" === c ? "uint256" : c.startsWith("fixed[") ? `fixed128x128${c.slice(5)}` : "fixed" === c ? "fixed128x128" : c.startsWith("ufixed[") ? `ufixed128x128${c.slice(6)}` : "ufixed" === c ? "ufixed128x128" : c
            }

            function y(c, m) {
                if ("address" === c) return y("uint160", w(m));
                if ("bool" === c) return y("uint8", m ? 1 : 0);
                if ("string" === c) return y("bytes", Buffer.from(m, "utf8"));
                if (B(c)) {
                    if (typeof m.length > "u") throw new Error("Not an array?");
                    const _ = Z(c);
                    if ("dynamic" !== _ && 0 !== _ && null !== _ && m.length > _) throw new Error(`Elements exceed array size: ${_}`);
                    const L = [];
                    c = c.slice(0, c.lastIndexOf("[")), "string" == typeof m && (m = JSON.parse(m));
                    for (const F in m) Object.prototype.hasOwnProperty.call(m, F) && L.push(y(c, m[F]));
                    if ("dynamic" === _) {
                        const F = y("uint256", m.length);
                        L.unshift(F)
                    }
                    return Buffer.concat(L)
                }
                if ("bytes" === c) {
                    m = Buffer.from(m);
                    let _ = Buffer.concat([y("uint256", m.length), m]);
                    return m.length % 32 != 0 && (_ = Buffer.concat([_, (0, l.zeros)(32 - m.length % 32)])), _
                }
                if (c.startsWith("bytes")) {
                    const _ = U(c);
                    if (_ < 1 || _ > 32) throw new Error(`Invalid bytes<N> width: ${_}`);
                    const L = "number" == typeof m ? (0, h.normalize)(m) : m;
                    return (0, l.setLengthRight)((0, l.toBuffer)(L), 32)
                }
                if (c.startsWith("uint")) {
                    const _ = U(c);
                    if (_ % 8 || _ < 8 || _ > 256) throw new Error(`Invalid uint<N> width: ${_}`);
                    const L = w(m);
                    if (L.bitLength() > _) throw new Error(`Supplied uint exceeds width: ${_} vs ${L.bitLength()}`);
                    if (L.isNeg()) throw new Error("Supplied uint is negative");
                    return L.toArrayLike(Buffer, "be", 32)
                }
                if (c.startsWith("int")) {
                    const _ = U(c);
                    if (_ % 8 || _ < 8 || _ > 256) throw new Error(`Invalid int<N> width: ${_}`);
                    const L = w(m);
                    if (L.bitLength() > _) throw new Error(`Supplied int exceeds width: ${_} vs ${L.bitLength()}`);
                    return L.toTwos(256).toArrayLike(Buffer, "be", 32)
                }
                if (c.startsWith("ufixed")) {
                    const _ = s(c),
                        L = w(m);
                    if (L.isNeg()) throw new Error("Supplied ufixed is negative");
                    return y("uint256", L.mul(new A.default(2).pow(new A.default(_[1]))))
                }
                if (c.startsWith("fixed")) {
                    const _ = s(c);
                    return y("int256", w(m).mul(new A.default(2).pow(new A.default(_[1]))))
                }
                throw new Error(`Unsupported or invalid type: ${JSON.stringify(c)}`)
            }

            function f(c) {
                return "string" === c || "bytes" === c || "dynamic" === Z(c)
            }

            function s(c) {
                const m = /^\D+(\d+)x(\d+)$/u.exec(c);
                if (null === m || m.length < 1) throw new Error(`Invalid parseTypeNxM input "${c}".`);
                return [parseInt(m[1], 10), parseInt(m[2], 10)]
            }
            k.solidityPack = function H(c, m) {
                if (c.length !== m.length) throw new Error("Number of types are not matching the values");
                const _ = [];
                for (let L = 0; L < c.length; L++) {
                    const F = g(c[L]);
                    _.push(O(F, m[L], null))
                }
                return Buffer.concat(_)
            }, k.parseNumber = w, k.rawEncode = function d(c, m) {
                const _ = [],
                    L = [];
                let F = 0;
                c.forEach(Y => {
                    if (B(Y)) {
                        const re = Z(Y);
                        F += "dynamic" !== re && null !== re ? 32 * re : 32
                    } else F += 32
                });
                for (let Y = 0; Y < c.length; Y++) {
                    const re = g(c[Y]),
                        X = y(re, m[Y]);
                    f(re) ? (_.push(y("uint256", F)), L.push(X), F += X.length) : _.push(X)
                }
                return Buffer.concat(_.concat(L))
            }
        },
        52561: function(K, k, C) {
            "use strict";
            var p = this && this.__createBinding || (Object.create ? function(G, h, H, B) {
                    void 0 === B && (B = H);
                    var Z = Object.getOwnPropertyDescriptor(h, H);
                    (!Z || ("get" in Z ? !h.__esModule : Z.writable || Z.configurable)) && (Z = {
                        enumerable: !0,
                        get: function() {
                            return h[H]
                        }
                    }), Object.defineProperty(G, B, Z)
                } : function(G, h, H, B) {
                    void 0 === B && (B = H), G[B] = h[H]
                }),
                l = this && this.__exportStar || function(G, h) {
                    for (var H in G) "default" !== H && !Object.prototype.hasOwnProperty.call(h, H) && p(h, G, H)
                };
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.normalize = k.concatSig = void 0, l(C(77339), k), l(C(49829), k), l(C(51618), k);
            var A = C(26690);
            Object.defineProperty(k, "concatSig", {
                enumerable: !0,
                get: function() {
                    return A.concatSig
                }
            }), Object.defineProperty(k, "normalize", {
                enumerable: !0,
                get: function() {
                    return A.normalize
                }
            })
        },
        77339: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.extractPublicKey = k.recoverPersonalSignature = k.personalSign = void 0;
            const p = C(7820),
                l = C(26690);

            function H(B, Z) {
                const U = (0, p.hashPersonalMessage)((0, l.legacyToBuffer)(B));
                return (0, l.recoverPublicKey)(U, Z)
            }
            k.personalSign = function A({
                privateKey: B,
                data: Z
            }) {
                if ((0, l.isNullish)(Z)) throw new Error("Missing data parameter");
                if ((0, l.isNullish)(B)) throw new Error("Missing privateKey parameter");
                const U = (0, l.legacyToBuffer)(Z),
                    w = (0, p.hashPersonalMessage)(U),
                    O = (0, p.ecsign)(w, B);
                return (0, l.concatSig)((0, p.toBuffer)(O.v), O.r, O.s)
            }, k.recoverPersonalSignature = function G({
                data: B,
                signature: Z
            }) {
                if ((0, l.isNullish)(B)) throw new Error("Missing data parameter");
                if ((0, l.isNullish)(Z)) throw new Error("Missing signature parameter");
                const U = H(B, Z),
                    w = (0, p.publicToAddress)(U);
                return (0, p.bufferToHex)(w)
            }, k.extractPublicKey = function h({
                data: B,
                signature: Z
            }) {
                if ((0, l.isNullish)(B)) throw new Error("Missing data parameter");
                if ((0, l.isNullish)(Z)) throw new Error("Missing signature parameter");
                return `0x${H(B,Z).toString("hex")}`
            }
        },
        49829: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.recoverTypedSignature = k.signTypedData = k.typedSignatureHash = k.TypedDataUtils = k.TYPED_MESSAGE_SCHEMA = k.SignTypedDataVersion = void 0;
            const p = C(7820),
                l = C(20555),
                A = C(18041),
                G = C(91864),
                h = C(26690);
            var H, F;

            function B(F, Y) {
                if (!Object.keys(H).includes(F)) throw new Error(`Invalid version: '${F}'`);
                if (Y && !Y.includes(F)) throw new Error(`SignTypedDataVersion not allowed: '${F}'. Allowed versions are: ${Y.join(", ")}`)
            }

            function Z(F, Y, re, V, X) {
                if (B(X, [H.V3, H.V4]), void 0 !== F[re]) return ["bytes32", X === H.V4 && null == V ? "0x0000000000000000000000000000000000000000000000000000000000000000" : (0, p.arrToBufArr)((0, l.keccak256)(U(re, V, F, X)))];
                if (void 0 === V) throw new Error(`missing value for field ${Y} of type ${re}`);
                if ("bytes" === re) return V = "number" == typeof V ? (0, h.numberToBuffer)(V) : (0, A.isHexString)(V) ? Buffer.from((V.length % 2 ? "0" : "") + V.slice(2), "hex") : Buffer.from(V, "utf8"), ["bytes32", (0, p.arrToBufArr)((0, l.keccak256)(V))];
                if ("string" === re) return V = "number" == typeof V ? (0, h.numberToBuffer)(V) : Buffer.from(V ? ? "", "utf8"), ["bytes32", (0, p.arrToBufArr)((0, l.keccak256)(V))];
                if (re.endsWith("]")) {
                    if (X === H.V3) throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
                    const q = re.slice(0, re.lastIndexOf("[")),
                        S = V.map(r => Z(F, Y, q, r, X));
                    return ["bytes32", (0, p.arrToBufArr)((0, l.keccak256)((0, G.rawEncode)(S.map(([r]) => r), S.map(([, r]) => r))))]
                }
                return [re, V]
            }

            function U(F, Y, re, V) {
                B(V, [H.V3, H.V4]);
                const X = ["bytes32"],
                    q = [d(F, re)];
                for (const S of re[F]) {
                    if (V === H.V3 && void 0 === Y[S.name]) continue;
                    const [r, a] = Z(re, S.name, S.type, Y[S.name], V);
                    X.push(r), q.push(a)
                }
                return (0, G.rawEncode)(X, q)
            }

            function w(F, Y) {
                let re = "";
                const V = O(F, Y);
                V.delete(F);
                const X = [F, ...Array.from(V).sort()];
                for (const q of X) {
                    if (!Y[q]) throw new Error(`No type definition specified: ${q}`);
                    re += `${q}(${Y[q].map(({name:r,type:a})=>`
                    $ {
                        a
                    }
                    $ {
                        r
                    }
                    `).join(",")})`
                }
                return re
            }

            function O(F, Y, re = new Set) {
                if ("string" != typeof F) throw new Error(`Invalid findTypeDependencies input ${JSON.stringify(F)}`);
                if ([F] = F.match(/^\w*/u), re.has(F) || void 0 === Y[F]) return re;
                re.add(F);
                for (const X of Y[F]) O(X.type, Y, re);
                return re
            }

            function g(F, Y, re, V) {
                B(V, [H.V3, H.V4]);
                const X = U(F, Y, re, V),
                    q = (0, l.keccak256)(X);
                return (0, p.arrToBufArr)(q)
            }

            function d(F, Y) {
                const re = Buffer.from(w(F, Y), "utf-8");
                return (0, p.arrToBufArr)((0, l.keccak256)(re))
            }

            function y(F) {
                const Y = {};
                for (const re in k.TYPED_MESSAGE_SCHEMA.properties) F[re] && (Y[re] = F[re]);
                return "types" in Y && (Y.types = Object.assign({
                    EIP712Domain: []
                }, Y.types)), Y
            }

            function f(F, Y) {
                B(Y, [H.V3, H.V4]);
                const re = y(F),
                    {
                        domain: V
                    } = re;
                return g("EIP712Domain", V, {
                    EIP712Domain: re.types.EIP712Domain
                }, Y)
            }

            function m(F) {
                const Y = new Error("Expect argument to be non-empty array");
                if ("object" != typeof F || !("length" in F) || !F.length) throw Y;
                const re = F.map(function(q) {
                        return "bytes" !== q.type ? q.value : (0, h.legacyToBuffer)(q.value)
                    }),
                    V = F.map(function(q) {
                        return q.type
                    }),
                    X = F.map(function(q) {
                        if (!q.name) throw Y;
                        return `${q.type} ${q.name}`
                    });
                return (0, p.arrToBufArr)((0, l.keccak256)((0, G.solidityPack)(["bytes32", "bytes32"], [(0, l.keccak256)((0, G.solidityPack)(new Array(F.length).fill("string"), X)), (0, l.keccak256)((0, G.solidityPack)(V, re))])))
            }(F = H = k.SignTypedDataVersion || (k.SignTypedDataVersion = {})).V1 = "V1", F.V3 = "V3", F.V4 = "V4", k.TYPED_MESSAGE_SCHEMA = {
                type: "object",
                properties: {
                    types: {
                        type: "object",
                        additionalProperties: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    }
                                },
                                required: ["name", "type"]
                            }
                        }
                    },
                    primaryType: {
                        type: "string"
                    },
                    domain: {
                        type: "object"
                    },
                    message: {
                        type: "object"
                    }
                },
                required: ["types", "primaryType", "domain", "message"]
            }, k.TypedDataUtils = {
                encodeData: U,
                encodeType: w,
                findTypeDependencies: O,
                hashStruct: g,
                hashType: d,
                sanitizeData: y,
                eip712Hash: function s(F, Y) {
                    B(Y, [H.V3, H.V4]);
                    const re = y(F),
                        V = [Buffer.from("1901", "hex")];
                    return V.push(f(F, Y)), "EIP712Domain" !== re.primaryType && V.push(g(re.primaryType, re.message, re.types, Y)), (0, p.arrToBufArr)((0, l.keccak256)(Buffer.concat(V)))
                },
                eip712DomainHash: f
            }, k.typedSignatureHash = function c(F) {
                const Y = m(F);
                return (0, p.bufferToHex)(Y)
            }, k.signTypedData = function _({
                privateKey: F,
                data: Y,
                version: re
            }) {
                if (B(re), (0, h.isNullish)(Y)) throw new Error("Missing data parameter");
                if ((0, h.isNullish)(F)) throw new Error("Missing private key parameter");
                const V = re === H.V1 ? m(Y) : k.TypedDataUtils.eip712Hash(Y, re),
                    X = (0, p.ecsign)(V, F);
                return (0, h.concatSig)((0, p.toBuffer)(X.v), X.r, X.s)
            }, k.recoverTypedSignature = function L({
                data: F,
                signature: Y,
                version: re
            }) {
                if (B(re), (0, h.isNullish)(F)) throw new Error("Missing data parameter");
                if ((0, h.isNullish)(Y)) throw new Error("Missing signature parameter");
                const V = re === H.V1 ? m(F) : k.TypedDataUtils.eip712Hash(F, re),
                    X = (0, h.recoverPublicKey)(V, Y),
                    q = (0, p.publicToAddress)(X);
                return (0, p.bufferToHex)(q)
            }
        },
        26690: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.numberToBuffer = k.normalize = k.recoverPublicKey = k.concatSig = k.legacyToBuffer = k.isNullish = k.padWithZeroes = void 0;
            const p = C(7820),
                l = C(18041);

            function A(w, O) {
                if ("" !== w && !/^[a-f0-9]+$/iu.test(w)) throw new Error(`Expected an unprefixed hex string. Received: ${w}`);
                if (O < 0) throw new Error(`Expected a non-negative integer target length. Received: ${O}`);
                return String.prototype.padStart.call(w, O, "0")
            }

            function G(w) {
                return null == w
            }
            k.padWithZeroes = A, k.isNullish = G, k.legacyToBuffer = function h(w) {
                return "string" != typeof w || (0, l.isHexString)(w) ? (0, p.toBuffer)(w) : Buffer.from(w)
            }, k.concatSig = function H(w, O, g) {
                const d = (0, p.fromSigned)(O),
                    y = (0, p.fromSigned)(g),
                    f = (0, p.bufferToInt)(w),
                    s = A((0, p.toUnsigned)(d).toString("hex"), 64),
                    c = A((0, p.toUnsigned)(y).toString("hex"), 64),
                    m = (0, l.stripHexPrefix)((0, l.intToHex)(f));
                return (0, p.addHexPrefix)(s.concat(c, m))
            }, k.recoverPublicKey = function B(w, O) {
                const g = (0, p.fromRpcSig)(O);
                return (0, p.ecrecover)(w, g.v, g.r, g.s)
            }, k.normalize = function Z(w) {
                if (!G(w)) {
                    if ("number" == typeof w) {
                        if (w < 0) return "0x";
                        const O = (0, p.toBuffer)(w);
                        w = (0, p.bufferToHex)(O)
                    }
                    if ("string" != typeof w) {
                        let O = "eth-sig-util.normalize() requires hex string or integer input.";
                        throw O += ` received ${typeof w}: ${w}`, new Error(O)
                    }
                    return (0, p.addHexPrefix)(w.toLowerCase())
                }
            }, k.numberToBuffer = function U(w) {
                const O = w.toString(16);
                return Buffer.from((O.length % 2 ? "0" : "") + O, "hex")
            }
        },
        53882: function(K, k, C) {
            ! function(p, l) {
                "use strict";

                function A(S, r) {
                    if (!S) throw new Error(r || "Assertion failed")
                }

                function G(S, r) {
                    S.super_ = r;
                    var a = function() {};
                    a.prototype = r.prototype, S.prototype = new a, S.prototype.constructor = S
                }

                function h(S, r, a) {
                    if (h.isBN(S)) return S;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== S && (("le" === r || "be" === r) && (a = r, r = 10), this._init(S || 0, r || 10, a || "be"))
                }
                var H;
                "object" == typeof p ? p.exports = h : l.BN = h, h.BN = h, h.wordSize = 26;
                try {
                    H = typeof window < "u" && typeof window.Buffer < "u" ? window.Buffer : C(993).Buffer
                } catch {}

                function B(S, r) {
                    var a = S.charCodeAt(r);
                    return a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : a - 48 & 15
                }

                function Z(S, r, a) {
                    var v = B(S, a);
                    return a - 1 >= r && (v |= B(S, a - 1) << 4), v
                }

                function U(S, r, a, v) {
                    for (var E = 0, T = Math.min(S.length, a), D = r; D < T; D++) {
                        var j = S.charCodeAt(D) - 48;
                        E *= v, E += j >= 49 ? j - 49 + 10 : j >= 17 ? j - 17 + 10 : j
                    }
                    return E
                }
                h.isBN = function(r) {
                    return r instanceof h || null !== r && "object" == typeof r && r.constructor.wordSize === h.wordSize && Array.isArray(r.words)
                }, h.max = function(r, a) {
                    return r.cmp(a) > 0 ? r : a
                }, h.min = function(r, a) {
                    return r.cmp(a) < 0 ? r : a
                }, h.prototype._init = function(r, a, v) {
                    if ("number" == typeof r) return this._initNumber(r, a, v);
                    if ("object" == typeof r) return this._initArray(r, a, v);
                    "hex" === a && (a = 16), A(a === (0 | a) && a >= 2 && a <= 36);
                    var E = 0;
                    "-" === (r = r.toString().replace(/\s+/g, ""))[0] && (E++, this.negative = 1), E < r.length && (16 === a ? this._parseHex(r, E, v) : (this._parseBase(r, a, E), "le" === v && this._initArray(this.toArray(), a, v)))
                }, h.prototype._initNumber = function(r, a, v) {
                    r < 0 && (this.negative = 1, r = -r), r < 67108864 ? (this.words = [67108863 & r], this.length = 1) : r < 4503599627370496 ? (this.words = [67108863 & r, r / 67108864 & 67108863], this.length = 2) : (A(r < 9007199254740992), this.words = [67108863 & r, r / 67108864 & 67108863, 1], this.length = 3), "le" === v && this._initArray(this.toArray(), a, v)
                }, h.prototype._initArray = function(r, a, v) {
                    if (A("number" == typeof r.length), r.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(r.length / 3), this.words = new Array(this.length);
                    for (var E = 0; E < this.length; E++) this.words[E] = 0;
                    var T, D, j = 0;
                    if ("be" === v)
                        for (E = r.length - 1, T = 0; E >= 0; E -= 3) this.words[T] |= (D = r[E] | r[E - 1] << 8 | r[E - 2] << 16) << j & 67108863, this.words[T + 1] = D >>> 26 - j & 67108863, (j += 24) >= 26 && (j -= 26, T++);
                    else if ("le" === v)
                        for (E = 0, T = 0; E < r.length; E += 3) this.words[T] |= (D = r[E] | r[E + 1] << 8 | r[E + 2] << 16) << j & 67108863, this.words[T + 1] = D >>> 26 - j & 67108863, (j += 24) >= 26 && (j -= 26, T++);
                    return this.strip()
                }, h.prototype._parseHex = function(r, a, v) {
                    this.length = Math.ceil((r.length - a) / 6), this.words = new Array(this.length);
                    for (var E = 0; E < this.length; E++) this.words[E] = 0;
                    var j, T = 0,
                        D = 0;
                    if ("be" === v)
                        for (E = r.length - 1; E >= a; E -= 2) j = Z(r, a, E) << T, this.words[D] |= 67108863 & j, T >= 18 ? (T -= 18, this.words[D += 1] |= j >>> 26) : T += 8;
                    else
                        for (E = (r.length - a) % 2 == 0 ? a + 1 : a; E < r.length; E += 2) j = Z(r, a, E) << T, this.words[D] |= 67108863 & j, T >= 18 ? (T -= 18, this.words[D += 1] |= j >>> 26) : T += 8;
                    this.strip()
                }, h.prototype._parseBase = function(r, a, v) {
                    this.words = [0], this.length = 1;
                    for (var E = 0, T = 1; T <= 67108863; T *= a) E++;
                    E--, T = T / a | 0;
                    for (var D = r.length - v, j = D % E, M = Math.min(D, D - j) + v, o = 0, I = v; I < M; I += E) o = U(r, I, I + E, a), this.imuln(T), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o);
                    if (0 !== j) {
                        var ge = 1;
                        for (o = U(r, I, r.length, a), I = 0; I < j; I++) ge *= a;
                        this.imuln(ge), this.words[0] + o < 67108864 ? this.words[0] += o : this._iaddn(o)
                    }
                    this.strip()
                }, h.prototype.copy = function(r) {
                    r.words = new Array(this.length);
                    for (var a = 0; a < this.length; a++) r.words[a] = this.words[a];
                    r.length = this.length, r.negative = this.negative, r.red = this.red
                }, h.prototype.clone = function() {
                    var r = new h(null);
                    return this.copy(r), r
                }, h.prototype._expand = function(r) {
                    for (; this.length < r;) this.words[this.length++] = 0;
                    return this
                }, h.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, h.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, h.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var w = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    O = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    g = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function y(S, r, a) {
                    a.negative = r.negative ^ S.negative;
                    var v = S.length + r.length | 0;
                    a.length = v, v = v - 1 | 0;
                    var E = 0 | S.words[0],
                        T = 0 | r.words[0],
                        D = E * T,
                        M = D / 67108864 | 0;
                    a.words[0] = 67108863 & D;
                    for (var o = 1; o < v; o++) {
                        for (var I = M >>> 26, ge = 67108863 & M, de = Math.min(o, r.length - 1), ce = Math.max(0, o - S.length + 1); ce <= de; ce++) I += (D = (E = 0 | S.words[o - ce | 0]) * (T = 0 | r.words[ce]) + ge) / 67108864 | 0, ge = 67108863 & D;
                        a.words[o] = 0 | ge, M = 0 | I
                    }
                    return 0 !== M ? a.words[o] = 0 | M : a.length--, a.strip()
                }
                h.prototype.toString = function(r, a) {
                    var v;
                    if (a = 0 | a || 1, 16 === (r = r || 10) || "hex" === r) {
                        v = "";
                        for (var E = 0, T = 0, D = 0; D < this.length; D++) {
                            var j = this.words[D],
                                M = (16777215 & (j << E | T)).toString(16);
                            v = 0 != (T = j >>> 24 - E & 16777215) || D !== this.length - 1 ? w[6 - M.length] + M + v : M + v, (E += 2) >= 26 && (E -= 26, D--)
                        }
                        for (0 !== T && (v = T.toString(16) + v); v.length % a != 0;) v = "0" + v;
                        return 0 !== this.negative && (v = "-" + v), v
                    }
                    if (r === (0 | r) && r >= 2 && r <= 36) {
                        var o = O[r],
                            I = g[r];
                        v = "";
                        var ge = this.clone();
                        for (ge.negative = 0; !ge.isZero();) {
                            var de = ge.modn(I).toString(r);
                            v = (ge = ge.idivn(I)).isZero() ? de + v : w[o - de.length] + de + v
                        }
                        for (this.isZero() && (v = "0" + v); v.length % a != 0;) v = "0" + v;
                        return 0 !== this.negative && (v = "-" + v), v
                    }
                    A(!1, "Base should be between 2 and 36")
                }, h.prototype.toNumber = function() {
                    var r = this.words[0];
                    return 2 === this.length ? r += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? r += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && A(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -r : r
                }, h.prototype.toJSON = function() {
                    return this.toString(16)
                }, h.prototype.toBuffer = function(r, a) {
                    return A(typeof H < "u"), this.toArrayLike(H, r, a)
                }, h.prototype.toArray = function(r, a) {
                    return this.toArrayLike(Array, r, a)
                }, h.prototype.toArrayLike = function(r, a, v) {
                    var E = this.byteLength(),
                        T = v || Math.max(1, E);
                    A(E <= T, "byte array longer than desired length"), A(T > 0, "Requested array length <= 0"), this.strip();
                    var M, o, D = "le" === a,
                        j = new r(T),
                        I = this.clone();
                    if (D) {
                        for (o = 0; !I.isZero(); o++) M = I.andln(255), I.iushrn(8), j[o] = M;
                        for (; o < T; o++) j[o] = 0
                    } else {
                        for (o = 0; o < T - E; o++) j[o] = 0;
                        for (o = 0; !I.isZero(); o++) M = I.andln(255), I.iushrn(8), j[T - o - 1] = M
                    }
                    return j
                }, h.prototype._countBits = Math.clz32 ? function(r) {
                    return 32 - Math.clz32(r)
                } : function(r) {
                    var a = r,
                        v = 0;
                    return a >= 4096 && (v += 13, a >>>= 13), a >= 64 && (v += 7, a >>>= 7), a >= 8 && (v += 4, a >>>= 4), a >= 2 && (v += 2, a >>>= 2), v + a
                }, h.prototype._zeroBits = function(r) {
                    if (0 === r) return 26;
                    var a = r,
                        v = 0;
                    return 8191 & a || (v += 13, a >>>= 13), 127 & a || (v += 7, a >>>= 7), 15 & a || (v += 4, a >>>= 4), 3 & a || (v += 2, a >>>= 2), 1 & a || v++, v
                }, h.prototype.bitLength = function() {
                    var a = this._countBits(this.words[this.length - 1]);
                    return 26 * (this.length - 1) + a
                }, h.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var r = 0, a = 0; a < this.length; a++) {
                        var v = this._zeroBits(this.words[a]);
                        if (r += v, 26 !== v) break
                    }
                    return r
                }, h.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, h.prototype.toTwos = function(r) {
                    return 0 !== this.negative ? this.abs().inotn(r).iaddn(1) : this.clone()
                }, h.prototype.fromTwos = function(r) {
                    return this.testn(r - 1) ? this.notn(r).iaddn(1).ineg() : this.clone()
                }, h.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, h.prototype.neg = function() {
                    return this.clone().ineg()
                }, h.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, h.prototype.iuor = function(r) {
                    for (; this.length < r.length;) this.words[this.length++] = 0;
                    for (var a = 0; a < r.length; a++) this.words[a] = this.words[a] | r.words[a];
                    return this.strip()
                }, h.prototype.ior = function(r) {
                    return A(0 == (this.negative | r.negative)), this.iuor(r)
                }, h.prototype.or = function(r) {
                    return this.length > r.length ? this.clone().ior(r) : r.clone().ior(this)
                }, h.prototype.uor = function(r) {
                    return this.length > r.length ? this.clone().iuor(r) : r.clone().iuor(this)
                }, h.prototype.iuand = function(r) {
                    var a;
                    a = this.length > r.length ? r : this;
                    for (var v = 0; v < a.length; v++) this.words[v] = this.words[v] & r.words[v];
                    return this.length = a.length, this.strip()
                }, h.prototype.iand = function(r) {
                    return A(0 == (this.negative | r.negative)), this.iuand(r)
                }, h.prototype.and = function(r) {
                    return this.length > r.length ? this.clone().iand(r) : r.clone().iand(this)
                }, h.prototype.uand = function(r) {
                    return this.length > r.length ? this.clone().iuand(r) : r.clone().iuand(this)
                }, h.prototype.iuxor = function(r) {
                    var a, v;
                    this.length > r.length ? (a = this, v = r) : (a = r, v = this);
                    for (var E = 0; E < v.length; E++) this.words[E] = a.words[E] ^ v.words[E];
                    if (this !== a)
                        for (; E < a.length; E++) this.words[E] = a.words[E];
                    return this.length = a.length, this.strip()
                }, h.prototype.ixor = function(r) {
                    return A(0 == (this.negative | r.negative)), this.iuxor(r)
                }, h.prototype.xor = function(r) {
                    return this.length > r.length ? this.clone().ixor(r) : r.clone().ixor(this)
                }, h.prototype.uxor = function(r) {
                    return this.length > r.length ? this.clone().iuxor(r) : r.clone().iuxor(this)
                }, h.prototype.inotn = function(r) {
                    A("number" == typeof r && r >= 0);
                    var a = 0 | Math.ceil(r / 26),
                        v = r % 26;
                    this._expand(a), v > 0 && a--;
                    for (var E = 0; E < a; E++) this.words[E] = 67108863 & ~this.words[E];
                    return v > 0 && (this.words[E] = ~this.words[E] & 67108863 >> 26 - v), this.strip()
                }, h.prototype.notn = function(r) {
                    return this.clone().inotn(r)
                }, h.prototype.setn = function(r, a) {
                    A("number" == typeof r && r >= 0);
                    var v = r / 26 | 0,
                        E = r % 26;
                    return this._expand(v + 1), this.words[v] = a ? this.words[v] | 1 << E : this.words[v] & ~(1 << E), this.strip()
                }, h.prototype.iadd = function(r) {
                    var a, v, E;
                    if (0 !== this.negative && 0 === r.negative) return this.negative = 0, a = this.isub(r), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== r.negative) return r.negative = 0, a = this.isub(r), r.negative = 1, a._normSign();
                    this.length > r.length ? (v = this, E = r) : (v = r, E = this);
                    for (var T = 0, D = 0; D < E.length; D++) this.words[D] = 67108863 & (a = (0 | v.words[D]) + (0 | E.words[D]) + T), T = a >>> 26;
                    for (; 0 !== T && D < v.length; D++) this.words[D] = 67108863 & (a = (0 | v.words[D]) + T), T = a >>> 26;
                    if (this.length = v.length, 0 !== T) this.words[this.length] = T, this.length++;
                    else if (v !== this)
                        for (; D < v.length; D++) this.words[D] = v.words[D];
                    return this
                }, h.prototype.add = function(r) {
                    var a;
                    return 0 !== r.negative && 0 === this.negative ? (r.negative = 0, a = this.sub(r), r.negative ^= 1, a) : 0 === r.negative && 0 !== this.negative ? (this.negative = 0, a = r.sub(this), this.negative = 1, a) : this.length > r.length ? this.clone().iadd(r) : r.clone().iadd(this)
                }, h.prototype.isub = function(r) {
                    if (0 !== r.negative) {
                        r.negative = 0;
                        var a = this.iadd(r);
                        return r.negative = 1, a._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(r), this.negative = 1, this._normSign();
                    var E, T, v = this.cmp(r);
                    if (0 === v) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    v > 0 ? (E = this, T = r) : (E = r, T = this);
                    for (var D = 0, j = 0; j < T.length; j++) D = (a = (0 | E.words[j]) - (0 | T.words[j]) + D) >> 26, this.words[j] = 67108863 & a;
                    for (; 0 !== D && j < E.length; j++) D = (a = (0 | E.words[j]) + D) >> 26, this.words[j] = 67108863 & a;
                    if (0 === D && j < E.length && E !== this)
                        for (; j < E.length; j++) this.words[j] = E.words[j];
                    return this.length = Math.max(this.length, j), E !== this && (this.negative = 1), this.strip()
                }, h.prototype.sub = function(r) {
                    return this.clone().isub(r)
                };
                var f = function(r, a, v) {
                    var M, o, I, E = r.words,
                        T = a.words,
                        D = v.words,
                        j = 0,
                        ge = 0 | E[0],
                        de = 8191 & ge,
                        ce = ge >>> 13,
                        se = 0 | E[1],
                        Be = 8191 & se,
                        Ge = se >>> 13,
                        wt = 0 | E[2],
                        Re = 8191 & wt,
                        Le = wt >>> 13,
                        St = 0 | E[3],
                        Je = 8191 & St,
                        nt = St >>> 13,
                        kt = 0 | E[4],
                        ct = 8191 & kt,
                        dt = kt >>> 13,
                        Ct = 0 | E[5],
                        ft = 8191 & Ct,
                        je = Ct >>> 13,
                        Mt = 0 | E[6],
                        $e = 8191 & Mt,
                        qe = Mt >>> 13,
                        At = 0 | E[7],
                        De = 8191 & At,
                        ze = At >>> 13,
                        It = 0 | E[8],
                        We = 8191 & It,
                        it = It >>> 13,
                        Tt = 0 | E[9],
                        ot = 8191 & Tt,
                        et = Tt >>> 13,
                        _t = 0 | T[0],
                        Ye = 8191 & _t,
                        Ke = _t >>> 13,
                        Et = 0 | T[1],
                        Xe = 8191 & Et,
                        Ve = Et >>> 13,
                        Pt = 0 | T[2],
                        Qe = 8191 & Pt,
                        st = Pt >>> 13,
                        Ft = 0 | T[3],
                        ut = 8191 & Ft,
                        tt = Ft >>> 13,
                        gt = 0 | T[4],
                        Ze = 8191 & gt,
                        Ue = gt >>> 13,
                        Bt = 0 | T[5],
                        rt = 8191 & Bt,
                        at = Bt >>> 13,
                        Ot = 0 | T[6],
                        N = 8191 & Ot,
                        x = Ot >>> 13,
                        t = 0 | T[7],
                        n = 8191 & t,
                        i = t >>> 13,
                        e = 0 | T[8],
                        u = 8191 & e,
                        P = e >>> 13,
                        R = 0 | T[9],
                        z = 8191 & R,
                        $ = R >>> 13;
                    v.negative = r.negative ^ a.negative, v.length = 19;
                    var oe = (j + (M = Math.imul(de, Ye)) | 0) + ((8191 & (o = (o = Math.imul(de, Ke)) + Math.imul(ce, Ye) | 0)) << 13) | 0;
                    j = ((I = Math.imul(ce, Ke)) + (o >>> 13) | 0) + (oe >>> 26) | 0, oe &= 67108863, M = Math.imul(Be, Ye), o = (o = Math.imul(Be, Ke)) + Math.imul(Ge, Ye) | 0, I = Math.imul(Ge, Ke);
                    var ie = (j + (M = M + Math.imul(de, Xe) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, Ve) | 0) + Math.imul(ce, Xe) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, Ve) | 0) + (o >>> 13) | 0) + (ie >>> 26) | 0, ie &= 67108863, M = Math.imul(Re, Ye), o = (o = Math.imul(Re, Ke)) + Math.imul(Le, Ye) | 0, I = Math.imul(Le, Ke), M = M + Math.imul(Be, Xe) | 0, o = (o = o + Math.imul(Be, Ve) | 0) + Math.imul(Ge, Xe) | 0, I = I + Math.imul(Ge, Ve) | 0;
                    var Fe = (j + (M = M + Math.imul(de, Qe) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, st) | 0) + Math.imul(ce, Qe) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, st) | 0) + (o >>> 13) | 0) + (Fe >>> 26) | 0, Fe &= 67108863, M = Math.imul(Je, Ye), o = (o = Math.imul(Je, Ke)) + Math.imul(nt, Ye) | 0, I = Math.imul(nt, Ke), M = M + Math.imul(Re, Xe) | 0, o = (o = o + Math.imul(Re, Ve) | 0) + Math.imul(Le, Xe) | 0, I = I + Math.imul(Le, Ve) | 0, M = M + Math.imul(Be, Qe) | 0, o = (o = o + Math.imul(Be, st) | 0) + Math.imul(Ge, Qe) | 0, I = I + Math.imul(Ge, st) | 0;
                    var he = (j + (M = M + Math.imul(de, ut) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, tt) | 0) + Math.imul(ce, ut) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, tt) | 0) + (o >>> 13) | 0) + (he >>> 26) | 0, he &= 67108863, M = Math.imul(ct, Ye), o = (o = Math.imul(ct, Ke)) + Math.imul(dt, Ye) | 0, I = Math.imul(dt, Ke), M = M + Math.imul(Je, Xe) | 0, o = (o = o + Math.imul(Je, Ve) | 0) + Math.imul(nt, Xe) | 0, I = I + Math.imul(nt, Ve) | 0, M = M + Math.imul(Re, Qe) | 0, o = (o = o + Math.imul(Re, st) | 0) + Math.imul(Le, Qe) | 0, I = I + Math.imul(Le, st) | 0, M = M + Math.imul(Be, ut) | 0, o = (o = o + Math.imul(Be, tt) | 0) + Math.imul(Ge, ut) | 0, I = I + Math.imul(Ge, tt) | 0;
                    var be = (j + (M = M + Math.imul(de, Ze) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, Ue) | 0) + Math.imul(ce, Ze) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, Ue) | 0) + (o >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, M = Math.imul(ft, Ye), o = (o = Math.imul(ft, Ke)) + Math.imul(je, Ye) | 0, I = Math.imul(je, Ke), M = M + Math.imul(ct, Xe) | 0, o = (o = o + Math.imul(ct, Ve) | 0) + Math.imul(dt, Xe) | 0, I = I + Math.imul(dt, Ve) | 0, M = M + Math.imul(Je, Qe) | 0, o = (o = o + Math.imul(Je, st) | 0) + Math.imul(nt, Qe) | 0, I = I + Math.imul(nt, st) | 0, M = M + Math.imul(Re, ut) | 0, o = (o = o + Math.imul(Re, tt) | 0) + Math.imul(Le, ut) | 0, I = I + Math.imul(Le, tt) | 0, M = M + Math.imul(Be, Ze) | 0, o = (o = o + Math.imul(Be, Ue) | 0) + Math.imul(Ge, Ze) | 0, I = I + Math.imul(Ge, Ue) | 0;
                    var Me = (j + (M = M + Math.imul(de, rt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, at) | 0) + Math.imul(ce, rt) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, at) | 0) + (o >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, M = Math.imul($e, Ye), o = (o = Math.imul($e, Ke)) + Math.imul(qe, Ye) | 0, I = Math.imul(qe, Ke), M = M + Math.imul(ft, Xe) | 0, o = (o = o + Math.imul(ft, Ve) | 0) + Math.imul(je, Xe) | 0, I = I + Math.imul(je, Ve) | 0, M = M + Math.imul(ct, Qe) | 0, o = (o = o + Math.imul(ct, st) | 0) + Math.imul(dt, Qe) | 0, I = I + Math.imul(dt, st) | 0, M = M + Math.imul(Je, ut) | 0, o = (o = o + Math.imul(Je, tt) | 0) + Math.imul(nt, ut) | 0, I = I + Math.imul(nt, tt) | 0, M = M + Math.imul(Re, Ze) | 0, o = (o = o + Math.imul(Re, Ue) | 0) + Math.imul(Le, Ze) | 0, I = I + Math.imul(Le, Ue) | 0, M = M + Math.imul(Be, rt) | 0, o = (o = o + Math.imul(Be, at) | 0) + Math.imul(Ge, rt) | 0, I = I + Math.imul(Ge, at) | 0;
                    var Ie = (j + (M = M + Math.imul(de, N) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, x) | 0) + Math.imul(ce, N) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, x) | 0) + (o >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, M = Math.imul(De, Ye), o = (o = Math.imul(De, Ke)) + Math.imul(ze, Ye) | 0, I = Math.imul(ze, Ke), M = M + Math.imul($e, Xe) | 0, o = (o = o + Math.imul($e, Ve) | 0) + Math.imul(qe, Xe) | 0, I = I + Math.imul(qe, Ve) | 0, M = M + Math.imul(ft, Qe) | 0, o = (o = o + Math.imul(ft, st) | 0) + Math.imul(je, Qe) | 0, I = I + Math.imul(je, st) | 0, M = M + Math.imul(ct, ut) | 0, o = (o = o + Math.imul(ct, tt) | 0) + Math.imul(dt, ut) | 0, I = I + Math.imul(dt, tt) | 0, M = M + Math.imul(Je, Ze) | 0, o = (o = o + Math.imul(Je, Ue) | 0) + Math.imul(nt, Ze) | 0, I = I + Math.imul(nt, Ue) | 0, M = M + Math.imul(Re, rt) | 0, o = (o = o + Math.imul(Re, at) | 0) + Math.imul(Le, rt) | 0, I = I + Math.imul(Le, at) | 0, M = M + Math.imul(Be, N) | 0, o = (o = o + Math.imul(Be, x) | 0) + Math.imul(Ge, N) | 0, I = I + Math.imul(Ge, x) | 0;
                    var Te = (j + (M = M + Math.imul(de, n) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, i) | 0) + Math.imul(ce, n) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, i) | 0) + (o >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, M = Math.imul(We, Ye), o = (o = Math.imul(We, Ke)) + Math.imul(it, Ye) | 0, I = Math.imul(it, Ke), M = M + Math.imul(De, Xe) | 0, o = (o = o + Math.imul(De, Ve) | 0) + Math.imul(ze, Xe) | 0, I = I + Math.imul(ze, Ve) | 0, M = M + Math.imul($e, Qe) | 0, o = (o = o + Math.imul($e, st) | 0) + Math.imul(qe, Qe) | 0, I = I + Math.imul(qe, st) | 0, M = M + Math.imul(ft, ut) | 0, o = (o = o + Math.imul(ft, tt) | 0) + Math.imul(je, ut) | 0, I = I + Math.imul(je, tt) | 0, M = M + Math.imul(ct, Ze) | 0, o = (o = o + Math.imul(ct, Ue) | 0) + Math.imul(dt, Ze) | 0, I = I + Math.imul(dt, Ue) | 0, M = M + Math.imul(Je, rt) | 0, o = (o = o + Math.imul(Je, at) | 0) + Math.imul(nt, rt) | 0, I = I + Math.imul(nt, at) | 0, M = M + Math.imul(Re, N) | 0, o = (o = o + Math.imul(Re, x) | 0) + Math.imul(Le, N) | 0, I = I + Math.imul(Le, x) | 0, M = M + Math.imul(Be, n) | 0, o = (o = o + Math.imul(Be, i) | 0) + Math.imul(Ge, n) | 0, I = I + Math.imul(Ge, i) | 0;
                    var we = (j + (M = M + Math.imul(de, u) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, P) | 0) + Math.imul(ce, u) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, P) | 0) + (o >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, M = Math.imul(ot, Ye), o = (o = Math.imul(ot, Ke)) + Math.imul(et, Ye) | 0, I = Math.imul(et, Ke), M = M + Math.imul(We, Xe) | 0, o = (o = o + Math.imul(We, Ve) | 0) + Math.imul(it, Xe) | 0, I = I + Math.imul(it, Ve) | 0, M = M + Math.imul(De, Qe) | 0, o = (o = o + Math.imul(De, st) | 0) + Math.imul(ze, Qe) | 0, I = I + Math.imul(ze, st) | 0, M = M + Math.imul($e, ut) | 0, o = (o = o + Math.imul($e, tt) | 0) + Math.imul(qe, ut) | 0, I = I + Math.imul(qe, tt) | 0, M = M + Math.imul(ft, Ze) | 0, o = (o = o + Math.imul(ft, Ue) | 0) + Math.imul(je, Ze) | 0, I = I + Math.imul(je, Ue) | 0, M = M + Math.imul(ct, rt) | 0, o = (o = o + Math.imul(ct, at) | 0) + Math.imul(dt, rt) | 0, I = I + Math.imul(dt, at) | 0, M = M + Math.imul(Je, N) | 0, o = (o = o + Math.imul(Je, x) | 0) + Math.imul(nt, N) | 0, I = I + Math.imul(nt, x) | 0, M = M + Math.imul(Re, n) | 0, o = (o = o + Math.imul(Re, i) | 0) + Math.imul(Le, n) | 0, I = I + Math.imul(Le, i) | 0, M = M + Math.imul(Be, u) | 0, o = (o = o + Math.imul(Be, P) | 0) + Math.imul(Ge, u) | 0, I = I + Math.imul(Ge, P) | 0;
                    var Ae = (j + (M = M + Math.imul(de, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(de, $) | 0) + Math.imul(ce, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ce, $) | 0) + (o >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, M = Math.imul(ot, Xe), o = (o = Math.imul(ot, Ve)) + Math.imul(et, Xe) | 0, I = Math.imul(et, Ve), M = M + Math.imul(We, Qe) | 0, o = (o = o + Math.imul(We, st) | 0) + Math.imul(it, Qe) | 0, I = I + Math.imul(it, st) | 0, M = M + Math.imul(De, ut) | 0, o = (o = o + Math.imul(De, tt) | 0) + Math.imul(ze, ut) | 0, I = I + Math.imul(ze, tt) | 0, M = M + Math.imul($e, Ze) | 0, o = (o = o + Math.imul($e, Ue) | 0) + Math.imul(qe, Ze) | 0, I = I + Math.imul(qe, Ue) | 0, M = M + Math.imul(ft, rt) | 0, o = (o = o + Math.imul(ft, at) | 0) + Math.imul(je, rt) | 0, I = I + Math.imul(je, at) | 0, M = M + Math.imul(ct, N) | 0, o = (o = o + Math.imul(ct, x) | 0) + Math.imul(dt, N) | 0, I = I + Math.imul(dt, x) | 0, M = M + Math.imul(Je, n) | 0, o = (o = o + Math.imul(Je, i) | 0) + Math.imul(nt, n) | 0, I = I + Math.imul(nt, i) | 0, M = M + Math.imul(Re, u) | 0, o = (o = o + Math.imul(Re, P) | 0) + Math.imul(Le, u) | 0, I = I + Math.imul(Le, P) | 0;
                    var Ee = (j + (M = M + Math.imul(Be, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(Be, $) | 0) + Math.imul(Ge, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(Ge, $) | 0) + (o >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, M = Math.imul(ot, Qe), o = (o = Math.imul(ot, st)) + Math.imul(et, Qe) | 0, I = Math.imul(et, st), M = M + Math.imul(We, ut) | 0, o = (o = o + Math.imul(We, tt) | 0) + Math.imul(it, ut) | 0, I = I + Math.imul(it, tt) | 0, M = M + Math.imul(De, Ze) | 0, o = (o = o + Math.imul(De, Ue) | 0) + Math.imul(ze, Ze) | 0, I = I + Math.imul(ze, Ue) | 0, M = M + Math.imul($e, rt) | 0, o = (o = o + Math.imul($e, at) | 0) + Math.imul(qe, rt) | 0, I = I + Math.imul(qe, at) | 0, M = M + Math.imul(ft, N) | 0, o = (o = o + Math.imul(ft, x) | 0) + Math.imul(je, N) | 0, I = I + Math.imul(je, x) | 0, M = M + Math.imul(ct, n) | 0, o = (o = o + Math.imul(ct, i) | 0) + Math.imul(dt, n) | 0, I = I + Math.imul(dt, i) | 0, M = M + Math.imul(Je, u) | 0, o = (o = o + Math.imul(Je, P) | 0) + Math.imul(nt, u) | 0, I = I + Math.imul(nt, P) | 0;
                    var me = (j + (M = M + Math.imul(Re, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(Re, $) | 0) + Math.imul(Le, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(Le, $) | 0) + (o >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, M = Math.imul(ot, ut), o = (o = Math.imul(ot, tt)) + Math.imul(et, ut) | 0, I = Math.imul(et, tt), M = M + Math.imul(We, Ze) | 0, o = (o = o + Math.imul(We, Ue) | 0) + Math.imul(it, Ze) | 0, I = I + Math.imul(it, Ue) | 0, M = M + Math.imul(De, rt) | 0, o = (o = o + Math.imul(De, at) | 0) + Math.imul(ze, rt) | 0, I = I + Math.imul(ze, at) | 0, M = M + Math.imul($e, N) | 0, o = (o = o + Math.imul($e, x) | 0) + Math.imul(qe, N) | 0, I = I + Math.imul(qe, x) | 0, M = M + Math.imul(ft, n) | 0, o = (o = o + Math.imul(ft, i) | 0) + Math.imul(je, n) | 0, I = I + Math.imul(je, i) | 0, M = M + Math.imul(ct, u) | 0, o = (o = o + Math.imul(ct, P) | 0) + Math.imul(dt, u) | 0, I = I + Math.imul(dt, P) | 0;
                    var ve = (j + (M = M + Math.imul(Je, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(Je, $) | 0) + Math.imul(nt, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(nt, $) | 0) + (o >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, M = Math.imul(ot, Ze), o = (o = Math.imul(ot, Ue)) + Math.imul(et, Ze) | 0, I = Math.imul(et, Ue), M = M + Math.imul(We, rt) | 0, o = (o = o + Math.imul(We, at) | 0) + Math.imul(it, rt) | 0, I = I + Math.imul(it, at) | 0, M = M + Math.imul(De, N) | 0, o = (o = o + Math.imul(De, x) | 0) + Math.imul(ze, N) | 0, I = I + Math.imul(ze, x) | 0, M = M + Math.imul($e, n) | 0, o = (o = o + Math.imul($e, i) | 0) + Math.imul(qe, n) | 0, I = I + Math.imul(qe, i) | 0, M = M + Math.imul(ft, u) | 0, o = (o = o + Math.imul(ft, P) | 0) + Math.imul(je, u) | 0, I = I + Math.imul(je, P) | 0;
                    var ue = (j + (M = M + Math.imul(ct, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(ct, $) | 0) + Math.imul(dt, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(dt, $) | 0) + (o >>> 13) | 0) + (ue >>> 26) | 0, ue &= 67108863, M = Math.imul(ot, rt), o = (o = Math.imul(ot, at)) + Math.imul(et, rt) | 0, I = Math.imul(et, at), M = M + Math.imul(We, N) | 0, o = (o = o + Math.imul(We, x) | 0) + Math.imul(it, N) | 0, I = I + Math.imul(it, x) | 0, M = M + Math.imul(De, n) | 0, o = (o = o + Math.imul(De, i) | 0) + Math.imul(ze, n) | 0, I = I + Math.imul(ze, i) | 0, M = M + Math.imul($e, u) | 0, o = (o = o + Math.imul($e, P) | 0) + Math.imul(qe, u) | 0, I = I + Math.imul(qe, P) | 0;
                    var le = (j + (M = M + Math.imul(ft, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(ft, $) | 0) + Math.imul(je, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(je, $) | 0) + (o >>> 13) | 0) + (le >>> 26) | 0, le &= 67108863, M = Math.imul(ot, N), o = (o = Math.imul(ot, x)) + Math.imul(et, N) | 0, I = Math.imul(et, x), M = M + Math.imul(We, n) | 0, o = (o = o + Math.imul(We, i) | 0) + Math.imul(it, n) | 0, I = I + Math.imul(it, i) | 0, M = M + Math.imul(De, u) | 0, o = (o = o + Math.imul(De, P) | 0) + Math.imul(ze, u) | 0, I = I + Math.imul(ze, P) | 0;
                    var pe = (j + (M = M + Math.imul($e, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul($e, $) | 0) + Math.imul(qe, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(qe, $) | 0) + (o >>> 13) | 0) + (pe >>> 26) | 0, pe &= 67108863, M = Math.imul(ot, n), o = (o = Math.imul(ot, i)) + Math.imul(et, n) | 0, I = Math.imul(et, i), M = M + Math.imul(We, u) | 0, o = (o = o + Math.imul(We, P) | 0) + Math.imul(it, u) | 0, I = I + Math.imul(it, P) | 0;
                    var ae = (j + (M = M + Math.imul(De, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(De, $) | 0) + Math.imul(ze, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(ze, $) | 0) + (o >>> 13) | 0) + (ae >>> 26) | 0, ae &= 67108863, M = Math.imul(ot, u), o = (o = Math.imul(ot, P)) + Math.imul(et, u) | 0, I = Math.imul(et, P);
                    var W = (j + (M = M + Math.imul(We, z) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(We, $) | 0) + Math.imul(it, z) | 0)) << 13) | 0;
                    j = ((I = I + Math.imul(it, $) | 0) + (o >>> 13) | 0) + (W >>> 26) | 0, W &= 67108863;
                    var J = (j + (M = Math.imul(ot, z)) | 0) + ((8191 & (o = (o = Math.imul(ot, $)) + Math.imul(et, z) | 0)) << 13) | 0;
                    return j = ((I = Math.imul(et, $)) + (o >>> 13) | 0) + (J >>> 26) | 0, J &= 67108863, D[0] = oe, D[1] = ie, D[2] = Fe, D[3] = he, D[4] = be, D[5] = Me, D[6] = Ie, D[7] = Te, D[8] = we, D[9] = Ae, D[10] = Ee, D[11] = me, D[12] = ve, D[13] = ue, D[14] = le, D[15] = pe, D[16] = ae, D[17] = W, D[18] = J, 0 !== j && (D[19] = j, v.length++), v
                };

                function c(S, r, a) {
                    return (new m).mulp(S, r, a)
                }

                function m(S, r) {
                    this.x = S, this.y = r
                }
                Math.imul || (f = y), h.prototype.mulTo = function(r, a) {
                    var v, E = this.length + r.length;
                    return v = 10 === this.length && 10 === r.length ? f(this, r, a) : E < 63 ? y(this, r, a) : E < 1024 ? function s(S, r, a) {
                        a.negative = r.negative ^ S.negative, a.length = S.length + r.length;
                        for (var v = 0, E = 0, T = 0; T < a.length - 1; T++) {
                            var D = E;
                            E = 0;
                            for (var j = 67108863 & v, M = Math.min(T, r.length - 1), o = Math.max(0, T - S.length + 1); o <= M; o++) {
                                var ce = (0 | S.words[T - o]) * (0 | r.words[o]),
                                    se = 67108863 & ce;
                                j = 67108863 & (se = se + j | 0), E += (D = (D = D + (ce / 67108864 | 0) | 0) + (se >>> 26) | 0) >>> 26, D &= 67108863
                            }
                            a.words[T] = j, v = D, D = E
                        }
                        return 0 !== v ? a.words[T] = v : a.length--, a.strip()
                    }(this, r, a) : c(this, r, a), v
                }, m.prototype.makeRBT = function(r) {
                    for (var a = new Array(r), v = h.prototype._countBits(r) - 1, E = 0; E < r; E++) a[E] = this.revBin(E, v, r);
                    return a
                }, m.prototype.revBin = function(r, a, v) {
                    if (0 === r || r === v - 1) return r;
                    for (var E = 0, T = 0; T < a; T++) E |= (1 & r) << a - T - 1, r >>= 1;
                    return E
                }, m.prototype.permute = function(r, a, v, E, T, D) {
                    for (var j = 0; j < D; j++) E[j] = a[r[j]], T[j] = v[r[j]]
                }, m.prototype.transform = function(r, a, v, E, T, D) {
                    this.permute(D, r, a, v, E, T);
                    for (var j = 1; j < T; j <<= 1)
                        for (var M = j << 1, o = Math.cos(2 * Math.PI / M), I = Math.sin(2 * Math.PI / M), ge = 0; ge < T; ge += M)
                            for (var de = o, ce = I, se = 0; se < j; se++) {
                                var Be = v[ge + se],
                                    Ge = E[ge + se],
                                    wt = v[ge + se + j],
                                    Re = E[ge + se + j],
                                    Le = de * wt - ce * Re;
                                Re = de * Re + ce * wt, v[ge + se] = Be + (wt = Le), E[ge + se] = Ge + Re, v[ge + se + j] = Be - wt, E[ge + se + j] = Ge - Re, se !== M && (Le = o * de - I * ce, ce = o * ce + I * de, de = Le)
                            }
                }, m.prototype.guessLen13b = function(r, a) {
                    var v = 1 | Math.max(a, r),
                        E = 1 & v,
                        T = 0;
                    for (v = v / 2 | 0; v; v >>>= 1) T++;
                    return 1 << T + 1 + E
                }, m.prototype.conjugate = function(r, a, v) {
                    if (!(v <= 1))
                        for (var E = 0; E < v / 2; E++) {
                            var T = r[E];
                            r[E] = r[v - E - 1], r[v - E - 1] = T, T = a[E], a[E] = -a[v - E - 1], a[v - E - 1] = -T
                        }
                }, m.prototype.normalize13b = function(r, a) {
                    for (var v = 0, E = 0; E < a / 2; E++) {
                        var T = 8192 * Math.round(r[2 * E + 1] / a) + Math.round(r[2 * E] / a) + v;
                        r[E] = 67108863 & T, v = T < 67108864 ? 0 : T / 67108864 | 0
                    }
                    return r
                }, m.prototype.convert13b = function(r, a, v, E) {
                    for (var T = 0, D = 0; D < a; D++) v[2 * D] = 8191 & (T += 0 | r[D]), v[2 * D + 1] = 8191 & (T >>>= 13), T >>>= 13;
                    for (D = 2 * a; D < E; ++D) v[D] = 0;
                    A(0 === T), A(0 == (-8192 & T))
                }, m.prototype.stub = function(r) {
                    for (var a = new Array(r), v = 0; v < r; v++) a[v] = 0;
                    return a
                }, m.prototype.mulp = function(r, a, v) {
                    var E = 2 * this.guessLen13b(r.length, a.length),
                        T = this.makeRBT(E),
                        D = this.stub(E),
                        j = new Array(E),
                        M = new Array(E),
                        o = new Array(E),
                        I = new Array(E),
                        ge = new Array(E),
                        de = new Array(E),
                        ce = v.words;
                    ce.length = E, this.convert13b(r.words, r.length, j, E), this.convert13b(a.words, a.length, I, E), this.transform(j, D, M, o, E, T), this.transform(I, D, ge, de, E, T);
                    for (var se = 0; se < E; se++) {
                        var Be = M[se] * ge[se] - o[se] * de[se];
                        o[se] = M[se] * de[se] + o[se] * ge[se], M[se] = Be
                    }
                    return this.conjugate(M, o, E), this.transform(M, o, ce, D, E, T), this.conjugate(ce, D, E), this.normalize13b(ce, E), v.negative = r.negative ^ a.negative, v.length = r.length + a.length, v.strip()
                }, h.prototype.mul = function(r) {
                    var a = new h(null);
                    return a.words = new Array(this.length + r.length), this.mulTo(r, a)
                }, h.prototype.mulf = function(r) {
                    var a = new h(null);
                    return a.words = new Array(this.length + r.length), c(this, r, a)
                }, h.prototype.imul = function(r) {
                    return this.clone().mulTo(r, this)
                }, h.prototype.imuln = function(r) {
                    A("number" == typeof r), A(r < 67108864);
                    for (var a = 0, v = 0; v < this.length; v++) {
                        var E = (0 | this.words[v]) * r,
                            T = (67108863 & E) + (67108863 & a);
                        a >>= 26, a += E / 67108864 | 0, a += T >>> 26, this.words[v] = 67108863 & T
                    }
                    return 0 !== a && (this.words[v] = a, this.length++), this
                }, h.prototype.muln = function(r) {
                    return this.clone().imuln(r)
                }, h.prototype.sqr = function() {
                    return this.mul(this)
                }, h.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, h.prototype.pow = function(r) {
                    var a = function d(S) {
                        for (var r = new Array(S.bitLength()), a = 0; a < r.length; a++) {
                            var E = a % 26;
                            r[a] = (S.words[a / 26 | 0] & 1 << E) >>> E
                        }
                        return r
                    }(r);
                    if (0 === a.length) return new h(1);
                    for (var v = this, E = 0; E < a.length && 0 === a[E]; E++, v = v.sqr());
                    if (++E < a.length)
                        for (var T = v.sqr(); E < a.length; E++, T = T.sqr()) 0 !== a[E] && (v = v.mul(T));
                    return v
                }, h.prototype.iushln = function(r) {
                    A("number" == typeof r && r >= 0);
                    var T, a = r % 26,
                        v = (r - a) / 26,
                        E = 67108863 >>> 26 - a << 26 - a;
                    if (0 !== a) {
                        var D = 0;
                        for (T = 0; T < this.length; T++) {
                            var j = this.words[T] & E;
                            this.words[T] = (0 | this.words[T]) - j << a | D, D = j >>> 26 - a
                        }
                        D && (this.words[T] = D, this.length++)
                    }
                    if (0 !== v) {
                        for (T = this.length - 1; T >= 0; T--) this.words[T + v] = this.words[T];
                        for (T = 0; T < v; T++) this.words[T] = 0;
                        this.length += v
                    }
                    return this.strip()
                }, h.prototype.ishln = function(r) {
                    return A(0 === this.negative), this.iushln(r)
                }, h.prototype.iushrn = function(r, a, v) {
                    var E;
                    A("number" == typeof r && r >= 0), E = a ? (a - a % 26) / 26 : 0;
                    var T = r % 26,
                        D = Math.min((r - T) / 26, this.length),
                        j = 67108863 ^ 67108863 >>> T << T,
                        M = v;
                    if (E -= D, E = Math.max(0, E), M) {
                        for (var o = 0; o < D; o++) M.words[o] = this.words[o];
                        M.length = D
                    }
                    if (0 !== D)
                        if (this.length > D)
                            for (this.length -= D, o = 0; o < this.length; o++) this.words[o] = this.words[o + D];
                        else this.words[0] = 0, this.length = 1;
                    var I = 0;
                    for (o = this.length - 1; o >= 0 && (0 !== I || o >= E); o--) {
                        var ge = 0 | this.words[o];
                        this.words[o] = I << 26 - T | ge >>> T, I = ge & j
                    }
                    return M && 0 !== I && (M.words[M.length++] = I), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, h.prototype.ishrn = function(r, a, v) {
                    return A(0 === this.negative), this.iushrn(r, a, v)
                }, h.prototype.shln = function(r) {
                    return this.clone().ishln(r)
                }, h.prototype.ushln = function(r) {
                    return this.clone().iushln(r)
                }, h.prototype.shrn = function(r) {
                    return this.clone().ishrn(r)
                }, h.prototype.ushrn = function(r) {
                    return this.clone().iushrn(r)
                }, h.prototype.testn = function(r) {
                    A("number" == typeof r && r >= 0);
                    var a = r % 26,
                        v = (r - a) / 26;
                    return !(this.length <= v || !(this.words[v] & 1 << a))
                }, h.prototype.imaskn = function(r) {
                    A("number" == typeof r && r >= 0);
                    var a = r % 26,
                        v = (r - a) / 26;
                    return A(0 === this.negative, "imaskn works only with positive numbers"), this.length <= v ? this : (0 !== a && v++, this.length = Math.min(v, this.length), 0 !== a && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> a << a), this.strip())
                }, h.prototype.maskn = function(r) {
                    return this.clone().imaskn(r)
                }, h.prototype.iaddn = function(r) {
                    return A("number" == typeof r), A(r < 67108864), r < 0 ? this.isubn(-r) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < r ? (this.words[0] = r - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(r), this.negative = 1, this) : this._iaddn(r)
                }, h.prototype._iaddn = function(r) {
                    this.words[0] += r;
                    for (var a = 0; a < this.length && this.words[a] >= 67108864; a++) this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
                    return this.length = Math.max(this.length, a + 1), this
                }, h.prototype.isubn = function(r) {
                    if (A("number" == typeof r), A(r < 67108864), r < 0) return this.iaddn(-r);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(r), this.negative = 1, this;
                    if (this.words[0] -= r, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var a = 0; a < this.length && this.words[a] < 0; a++) this.words[a] += 67108864, this.words[a + 1] -= 1;
                    return this.strip()
                }, h.prototype.addn = function(r) {
                    return this.clone().iaddn(r)
                }, h.prototype.subn = function(r) {
                    return this.clone().isubn(r)
                }, h.prototype.iabs = function() {
                    return this.negative = 0, this
                }, h.prototype.abs = function() {
                    return this.clone().iabs()
                }, h.prototype._ishlnsubmul = function(r, a, v) {
                    var T;
                    this._expand(r.length + v);
                    var D, j = 0;
                    for (T = 0; T < r.length; T++) {
                        D = (0 | this.words[T + v]) + j;
                        var M = (0 | r.words[T]) * a;
                        j = ((D -= 67108863 & M) >> 26) - (M / 67108864 | 0), this.words[T + v] = 67108863 & D
                    }
                    for (; T < this.length - v; T++) j = (D = (0 | this.words[T + v]) + j) >> 26, this.words[T + v] = 67108863 & D;
                    if (0 === j) return this.strip();
                    for (A(-1 === j), j = 0, T = 0; T < this.length; T++) j = (D = -(0 | this.words[T]) + j) >> 26, this.words[T] = 67108863 & D;
                    return this.negative = 1, this.strip()
                }, h.prototype._wordDiv = function(r, a) {
                    var v, E = this.clone(),
                        T = r,
                        D = 0 | T.words[T.length - 1];
                    0 != (v = 26 - this._countBits(D)) && (T = T.ushln(v), E.iushln(v), D = 0 | T.words[T.length - 1]);
                    var o, M = E.length - T.length;
                    if ("mod" !== a) {
                        (o = new h(null)).length = M + 1, o.words = new Array(o.length);
                        for (var I = 0; I < o.length; I++) o.words[I] = 0
                    }
                    var ge = E.clone()._ishlnsubmul(T, 1, M);
                    0 === ge.negative && (E = ge, o && (o.words[M] = 1));
                    for (var de = M - 1; de >= 0; de--) {
                        var ce = 67108864 * (0 | E.words[T.length + de]) + (0 | E.words[T.length + de - 1]);
                        for (ce = Math.min(ce / D | 0, 67108863), E._ishlnsubmul(T, ce, de); 0 !== E.negative;) ce--, E.negative = 0, E._ishlnsubmul(T, 1, de), E.isZero() || (E.negative ^= 1);
                        o && (o.words[de] = ce)
                    }
                    return o && o.strip(), E.strip(), "div" !== a && 0 !== v && E.iushrn(v), {
                        div: o || null,
                        mod: E
                    }
                }, h.prototype.divmod = function(r, a, v) {
                    return A(!r.isZero()), this.isZero() ? {
                        div: new h(0),
                        mod: new h(0)
                    } : 0 !== this.negative && 0 === r.negative ? (D = this.neg().divmod(r, a), "mod" !== a && (E = D.div.neg()), "div" !== a && (T = D.mod.neg(), v && 0 !== T.negative && T.iadd(r)), {
                        div: E,
                        mod: T
                    }) : 0 === this.negative && 0 !== r.negative ? (D = this.divmod(r.neg(), a), "mod" !== a && (E = D.div.neg()), {
                        div: E,
                        mod: D.mod
                    }) : this.negative & r.negative ? (D = this.neg().divmod(r.neg(), a), "div" !== a && (T = D.mod.neg(), v && 0 !== T.negative && T.isub(r)), {
                        div: D.div,
                        mod: T
                    }) : r.length > this.length || this.cmp(r) < 0 ? {
                        div: new h(0),
                        mod: this
                    } : 1 === r.length ? "div" === a ? {
                        div: this.divn(r.words[0]),
                        mod: null
                    } : "mod" === a ? {
                        div: null,
                        mod: new h(this.modn(r.words[0]))
                    } : {
                        div: this.divn(r.words[0]),
                        mod: new h(this.modn(r.words[0]))
                    } : this._wordDiv(r, a);
                    var E, T, D
                }, h.prototype.div = function(r) {
                    return this.divmod(r, "div", !1).div
                }, h.prototype.mod = function(r) {
                    return this.divmod(r, "mod", !1).mod
                }, h.prototype.umod = function(r) {
                    return this.divmod(r, "mod", !0).mod
                }, h.prototype.divRound = function(r) {
                    var a = this.divmod(r);
                    if (a.mod.isZero()) return a.div;
                    var v = 0 !== a.div.negative ? a.mod.isub(r) : a.mod,
                        E = r.ushrn(1),
                        T = r.andln(1),
                        D = v.cmp(E);
                    return D < 0 || 1 === T && 0 === D ? a.div : 0 !== a.div.negative ? a.div.isubn(1) : a.div.iaddn(1)
                }, h.prototype.modn = function(r) {
                    A(r <= 67108863);
                    for (var a = (1 << 26) % r, v = 0, E = this.length - 1; E >= 0; E--) v = (a * v + (0 | this.words[E])) % r;
                    return v
                }, h.prototype.idivn = function(r) {
                    A(r <= 67108863);
                    for (var a = 0, v = this.length - 1; v >= 0; v--) {
                        var E = (0 | this.words[v]) + 67108864 * a;
                        this.words[v] = E / r | 0, a = E % r
                    }
                    return this.strip()
                }, h.prototype.divn = function(r) {
                    return this.clone().idivn(r)
                }, h.prototype.egcd = function(r) {
                    A(0 === r.negative), A(!r.isZero());
                    var a = this,
                        v = r.clone();
                    a = 0 !== a.negative ? a.umod(r) : a.clone();
                    for (var E = new h(1), T = new h(0), D = new h(0), j = new h(1), M = 0; a.isEven() && v.isEven();) a.iushrn(1), v.iushrn(1), ++M;
                    for (var o = v.clone(), I = a.clone(); !a.isZero();) {
                        for (var ge = 0, de = 1; !(a.words[0] & de) && ge < 26; ++ge, de <<= 1);
                        if (ge > 0)
                            for (a.iushrn(ge); ge-- > 0;)(E.isOdd() || T.isOdd()) && (E.iadd(o), T.isub(I)), E.iushrn(1), T.iushrn(1);
                        for (var ce = 0, se = 1; !(v.words[0] & se) && ce < 26; ++ce, se <<= 1);
                        if (ce > 0)
                            for (v.iushrn(ce); ce-- > 0;)(D.isOdd() || j.isOdd()) && (D.iadd(o), j.isub(I)), D.iushrn(1), j.iushrn(1);
                        a.cmp(v) >= 0 ? (a.isub(v), E.isub(D), T.isub(j)) : (v.isub(a), D.isub(E), j.isub(T))
                    }
                    return {
                        a: D,
                        b: j,
                        gcd: v.iushln(M)
                    }
                }, h.prototype._invmp = function(r) {
                    A(0 === r.negative), A(!r.isZero());
                    var ge, a = this,
                        v = r.clone();
                    a = 0 !== a.negative ? a.umod(r) : a.clone();
                    for (var E = new h(1), T = new h(0), D = v.clone(); a.cmpn(1) > 0 && v.cmpn(1) > 0;) {
                        for (var j = 0, M = 1; !(a.words[0] & M) && j < 26; ++j, M <<= 1);
                        if (j > 0)
                            for (a.iushrn(j); j-- > 0;) E.isOdd() && E.iadd(D), E.iushrn(1);
                        for (var o = 0, I = 1; !(v.words[0] & I) && o < 26; ++o, I <<= 1);
                        if (o > 0)
                            for (v.iushrn(o); o-- > 0;) T.isOdd() && T.iadd(D), T.iushrn(1);
                        a.cmp(v) >= 0 ? (a.isub(v), E.isub(T)) : (v.isub(a), T.isub(E))
                    }
                    return (ge = 0 === a.cmpn(1) ? E : T).cmpn(0) < 0 && ge.iadd(r), ge
                }, h.prototype.gcd = function(r) {
                    if (this.isZero()) return r.abs();
                    if (r.isZero()) return this.abs();
                    var a = this.clone(),
                        v = r.clone();
                    a.negative = 0, v.negative = 0;
                    for (var E = 0; a.isEven() && v.isEven(); E++) a.iushrn(1), v.iushrn(1);
                    for (;;) {
                        for (; a.isEven();) a.iushrn(1);
                        for (; v.isEven();) v.iushrn(1);
                        var T = a.cmp(v);
                        if (T < 0) {
                            var D = a;
                            a = v, v = D
                        } else if (0 === T || 0 === v.cmpn(1)) break;
                        a.isub(v)
                    }
                    return v.iushln(E)
                }, h.prototype.invm = function(r) {
                    return this.egcd(r).a.umod(r)
                }, h.prototype.isEven = function() {
                    return 0 == (1 & this.words[0])
                }, h.prototype.isOdd = function() {
                    return 1 == (1 & this.words[0])
                }, h.prototype.andln = function(r) {
                    return this.words[0] & r
                }, h.prototype.bincn = function(r) {
                    A("number" == typeof r);
                    var a = r % 26,
                        v = (r - a) / 26,
                        E = 1 << a;
                    if (this.length <= v) return this._expand(v + 1), this.words[v] |= E, this;
                    for (var T = E, D = v; 0 !== T && D < this.length; D++) {
                        var j = 0 | this.words[D];
                        T = (j += T) >>> 26, this.words[D] = j &= 67108863
                    }
                    return 0 !== T && (this.words[D] = T, this.length++), this
                }, h.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, h.prototype.cmpn = function(r) {
                    var v, a = r < 0;
                    if (0 !== this.negative && !a) return -1;
                    if (0 === this.negative && a) return 1;
                    if (this.strip(), this.length > 1) v = 1;
                    else {
                        a && (r = -r), A(r <= 67108863, "Number is too big");
                        var E = 0 | this.words[0];
                        v = E === r ? 0 : E < r ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -v : v
                }, h.prototype.cmp = function(r) {
                    if (0 !== this.negative && 0 === r.negative) return -1;
                    if (0 === this.negative && 0 !== r.negative) return 1;
                    var a = this.ucmp(r);
                    return 0 !== this.negative ? 0 | -a : a
                }, h.prototype.ucmp = function(r) {
                    if (this.length > r.length) return 1;
                    if (this.length < r.length) return -1;
                    for (var a = 0, v = this.length - 1; v >= 0; v--) {
                        var E = 0 | this.words[v],
                            T = 0 | r.words[v];
                        if (E !== T) {
                            E < T ? a = -1 : E > T && (a = 1);
                            break
                        }
                    }
                    return a
                }, h.prototype.gtn = function(r) {
                    return 1 === this.cmpn(r)
                }, h.prototype.gt = function(r) {
                    return 1 === this.cmp(r)
                }, h.prototype.gten = function(r) {
                    return this.cmpn(r) >= 0
                }, h.prototype.gte = function(r) {
                    return this.cmp(r) >= 0
                }, h.prototype.ltn = function(r) {
                    return -1 === this.cmpn(r)
                }, h.prototype.lt = function(r) {
                    return -1 === this.cmp(r)
                }, h.prototype.lten = function(r) {
                    return this.cmpn(r) <= 0
                }, h.prototype.lte = function(r) {
                    return this.cmp(r) <= 0
                }, h.prototype.eqn = function(r) {
                    return 0 === this.cmpn(r)
                }, h.prototype.eq = function(r) {
                    return 0 === this.cmp(r)
                }, h.red = function(r) {
                    return new X(r)
                }, h.prototype.toRed = function(r) {
                    return A(!this.red, "Already a number in reduction context"), A(0 === this.negative, "red works only with positives"), r.convertTo(this)._forceRed(r)
                }, h.prototype.fromRed = function() {
                    return A(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, h.prototype._forceRed = function(r) {
                    return this.red = r, this
                }, h.prototype.forceRed = function(r) {
                    return A(!this.red, "Already a number in reduction context"), this._forceRed(r)
                }, h.prototype.redAdd = function(r) {
                    return A(this.red, "redAdd works only with red numbers"), this.red.add(this, r)
                }, h.prototype.redIAdd = function(r) {
                    return A(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, r)
                }, h.prototype.redSub = function(r) {
                    return A(this.red, "redSub works only with red numbers"), this.red.sub(this, r)
                }, h.prototype.redISub = function(r) {
                    return A(this.red, "redISub works only with red numbers"), this.red.isub(this, r)
                }, h.prototype.redShl = function(r) {
                    return A(this.red, "redShl works only with red numbers"), this.red.shl(this, r)
                }, h.prototype.redMul = function(r) {
                    return A(this.red, "redMul works only with red numbers"), this.red._verify2(this, r), this.red.mul(this, r)
                }, h.prototype.redIMul = function(r) {
                    return A(this.red, "redMul works only with red numbers"), this.red._verify2(this, r), this.red.imul(this, r)
                }, h.prototype.redSqr = function() {
                    return A(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, h.prototype.redISqr = function() {
                    return A(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, h.prototype.redSqrt = function() {
                    return A(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, h.prototype.redInvm = function() {
                    return A(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, h.prototype.redNeg = function() {
                    return A(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, h.prototype.redPow = function(r) {
                    return A(this.red && !r.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, r)
                };
                var _ = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function L(S, r) {
                    this.name = S, this.p = new h(r, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function F() {
                    L.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function Y() {
                    L.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function re() {
                    L.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function V() {
                    L.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function X(S) {
                    if ("string" == typeof S) {
                        var r = h._prime(S);
                        this.m = r.p, this.prime = r
                    } else A(S.gtn(1), "modulus must be greater than 1"), this.m = S, this.prime = null
                }

                function q(S) {
                    X.call(this, S), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                L.prototype._tmp = function() {
                    var r = new h(null);
                    return r.words = new Array(Math.ceil(this.n / 13)), r
                }, L.prototype.ireduce = function(r) {
                    var v, a = r;
                    do {
                        this.split(a, this.tmp), v = (a = (a = this.imulK(a)).iadd(this.tmp)).bitLength()
                    } while (v > this.n);
                    var E = v < this.n ? -1 : a.ucmp(this.p);
                    return 0 === E ? (a.words[0] = 0, a.length = 1) : E > 0 ? a.isub(this.p) : void 0 !== a.strip ? a.strip() : a._strip(), a
                }, L.prototype.split = function(r, a) {
                    r.iushrn(this.n, 0, a)
                }, L.prototype.imulK = function(r) {
                    return r.imul(this.k)
                }, G(F, L), F.prototype.split = function(r, a) {
                    for (var v = 4194303, E = Math.min(r.length, 9), T = 0; T < E; T++) a.words[T] = r.words[T];
                    if (a.length = E, r.length <= 9) return r.words[0] = 0, void(r.length = 1);
                    var D = r.words[9];
                    for (a.words[a.length++] = D & v, T = 10; T < r.length; T++) {
                        var j = 0 | r.words[T];
                        r.words[T - 10] = (j & v) << 4 | D >>> 22, D = j
                    }
                    r.words[T - 10] = D >>>= 22, r.length -= 0 === D && r.length > 10 ? 10 : 9
                }, F.prototype.imulK = function(r) {
                    r.words[r.length] = 0, r.words[r.length + 1] = 0, r.length += 2;
                    for (var a = 0, v = 0; v < r.length; v++) {
                        var E = 0 | r.words[v];
                        r.words[v] = 67108863 & (a += 977 * E), a = 64 * E + (a / 67108864 | 0)
                    }
                    return 0 === r.words[r.length - 1] && (r.length--, 0 === r.words[r.length - 1] && r.length--), r
                }, G(Y, L), G(re, L), G(V, L), V.prototype.imulK = function(r) {
                    for (var a = 0, v = 0; v < r.length; v++) {
                        var E = 19 * (0 | r.words[v]) + a,
                            T = 67108863 & E;
                        E >>>= 26, r.words[v] = T, a = E
                    }
                    return 0 !== a && (r.words[r.length++] = a), r
                }, h._prime = function(r) {
                    if (_[r]) return _[r];
                    var a;
                    if ("k256" === r) a = new F;
                    else if ("p224" === r) a = new Y;
                    else if ("p192" === r) a = new re;
                    else {
                        if ("p25519" !== r) throw new Error("Unknown prime " + r);
                        a = new V
                    }
                    return _[r] = a, a
                }, X.prototype._verify1 = function(r) {
                    A(0 === r.negative, "red works only with positives"), A(r.red, "red works only with red numbers")
                }, X.prototype._verify2 = function(r, a) {
                    A(0 == (r.negative | a.negative), "red works only with positives"), A(r.red && r.red === a.red, "red works only with red numbers")
                }, X.prototype.imod = function(r) {
                    return this.prime ? this.prime.ireduce(r)._forceRed(this) : r.umod(this.m)._forceRed(this)
                }, X.prototype.neg = function(r) {
                    return r.isZero() ? r.clone() : this.m.sub(r)._forceRed(this)
                }, X.prototype.add = function(r, a) {
                    this._verify2(r, a);
                    var v = r.add(a);
                    return v.cmp(this.m) >= 0 && v.isub(this.m), v._forceRed(this)
                }, X.prototype.iadd = function(r, a) {
                    this._verify2(r, a);
                    var v = r.iadd(a);
                    return v.cmp(this.m) >= 0 && v.isub(this.m), v
                }, X.prototype.sub = function(r, a) {
                    this._verify2(r, a);
                    var v = r.sub(a);
                    return v.cmpn(0) < 0 && v.iadd(this.m), v._forceRed(this)
                }, X.prototype.isub = function(r, a) {
                    this._verify2(r, a);
                    var v = r.isub(a);
                    return v.cmpn(0) < 0 && v.iadd(this.m), v
                }, X.prototype.shl = function(r, a) {
                    return this._verify1(r), this.imod(r.ushln(a))
                }, X.prototype.imul = function(r, a) {
                    return this._verify2(r, a), this.imod(r.imul(a))
                }, X.prototype.mul = function(r, a) {
                    return this._verify2(r, a), this.imod(r.mul(a))
                }, X.prototype.isqr = function(r) {
                    return this.imul(r, r.clone())
                }, X.prototype.sqr = function(r) {
                    return this.mul(r, r)
                }, X.prototype.sqrt = function(r) {
                    if (r.isZero()) return r.clone();
                    var a = this.m.andln(3);
                    if (A(a % 2 == 1), 3 === a) {
                        var v = this.m.add(new h(1)).iushrn(2);
                        return this.pow(r, v)
                    }
                    for (var E = this.m.subn(1), T = 0; !E.isZero() && 0 === E.andln(1);) T++, E.iushrn(1);
                    A(!E.isZero());
                    var D = new h(1).toRed(this),
                        j = D.redNeg(),
                        M = this.m.subn(1).iushrn(1),
                        o = this.m.bitLength();
                    for (o = new h(2 * o * o).toRed(this); 0 !== this.pow(o, M).cmp(j);) o.redIAdd(j);
                    for (var I = this.pow(o, E), ge = this.pow(r, E.addn(1).iushrn(1)), de = this.pow(r, E), ce = T; 0 !== de.cmp(D);) {
                        for (var se = de, Be = 0; 0 !== se.cmp(D); Be++) se = se.redSqr();
                        A(Be < ce);
                        var Ge = this.pow(I, new h(1).iushln(ce - Be - 1));
                        ge = ge.redMul(Ge), I = Ge.redSqr(), de = de.redMul(I), ce = Be
                    }
                    return ge
                }, X.prototype.invm = function(r) {
                    var a = r._invmp(this.m);
                    return 0 !== a.negative ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a)
                }, X.prototype.pow = function(r, a) {
                    if (a.isZero()) return new h(1).toRed(this);
                    if (0 === a.cmpn(1)) return r.clone();
                    var E = new Array(16);
                    E[0] = new h(1).toRed(this), E[1] = r;
                    for (var T = 2; T < E.length; T++) E[T] = this.mul(E[T - 1], r);
                    var D = E[0],
                        j = 0,
                        M = 0,
                        o = a.bitLength() % 26;
                    for (0 === o && (o = 26), T = a.length - 1; T >= 0; T--) {
                        for (var I = a.words[T], ge = o - 1; ge >= 0; ge--) {
                            var de = I >> ge & 1;
                            D !== E[0] && (D = this.sqr(D)), 0 !== de || 0 !== j ? (j <<= 1, j |= de, (4 == ++M || 0 === T && 0 === ge) && (D = this.mul(D, E[j]), M = 0, j = 0)) : M = 0
                        }
                        o = 26
                    }
                    return D
                }, X.prototype.convertTo = function(r) {
                    var a = r.umod(this.m);
                    return a === r ? a.clone() : a
                }, X.prototype.convertFrom = function(r) {
                    var a = r.clone();
                    return a.red = null, a
                }, h.mont = function(r) {
                    return new q(r)
                }, G(q, X), q.prototype.convertTo = function(r) {
                    return this.imod(r.ushln(this.shift))
                }, q.prototype.convertFrom = function(r) {
                    var a = this.imod(r.mul(this.rinv));
                    return a.red = null, a
                }, q.prototype.imul = function(r, a) {
                    if (r.isZero() || a.isZero()) return r.words[0] = 0, r.length = 1, r;
                    var v = r.imul(a),
                        E = v.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        T = v.isub(E).iushrn(this.shift),
                        D = T;
                    return T.cmp(this.m) >= 0 ? D = T.isub(this.m) : T.cmpn(0) < 0 && (D = T.iadd(this.m)), D._forceRed(this)
                }, q.prototype.mul = function(r, a) {
                    if (r.isZero() || a.isZero()) return new h(0)._forceRed(this);
                    var v = r.mul(a),
                        E = v.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        T = v.isub(E).iushrn(this.shift),
                        D = T;
                    return T.cmp(this.m) >= 0 ? D = T.isub(this.m) : T.cmpn(0) < 0 && (D = T.iadd(this.m)), D._forceRed(this)
                }, q.prototype.invm = function(r) {
                    return this.imod(r._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(K = C.nmd(K), this)
        },
        63060: (K, k, C) => {
            "use strict";
            C.r(k), C.d(k, {
                EthereumPrivateKeyProvider: () => Ot,
                TransactionFormatter: () => Bt,
                WalletConnectProvider: () => I,
                WalletConnectV2Provider: () => St,
                getProviderHandlers: () => Et
            });
            var p = C(49671),
                l = C(81180),
                A = C(21308),
                G = C(21332),
                h = C(78229),
                H = C(4100),
                B = C(76088),
                Z = C(64778),
                U = C(83571),
                O = C(7820),
                d = C(52561),
                f = C(35199),
                s = C(5936),
                c = C.n(s),
                m = C(75725),
                _ = C(24138),
                L = C(83843),
                Y = C(62662),
                re = C.n(Y);

            function V(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function X(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? V(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }

            function q(N) {
                return 42 === N.length
            }

            function S(N) {
                let {
                    getAccounts: x,
                    getPrivateKey: t,
                    processDecryptMessage: n,
                    processEncryptionPublicKey: i,
                    processEthSignMessage: e,
                    processPersonalMessage: u,
                    processTransaction: P,
                    processSignTransaction: R,
                    processTypedMessage: z,
                    processTypedMessageV3: $,
                    processTypedMessageV4: oe
                } = N;
                if (!x) throw new Error("opts.getAccounts is required");

                function ie(b, fe) {
                    return Fe.apply(this, arguments)
                }

                function Fe() {
                    return (Fe = (0, p.Z)(function*(b, fe) {
                        if ("string" == typeof b && b.length > 0) {
                            const _e = (yield x(fe)).map(Se => Se.toLowerCase()),
                                xe = b.toLowerCase();
                            if (_e.includes(xe)) return xe
                        }
                        throw H.Sy.rpc.invalidParams({
                            message: "Invalid parameters: must provide an Ethereum address."
                        })
                    })).apply(this, arguments)
                }

                function be() {
                    return (be = (0, p.Z)(function*(b, fe) {
                        fe.result = yield x(b)
                    })).apply(this, arguments)
                }

                function Ie() {
                    return (Ie = (0, p.Z)(function*(b, fe) {
                        const ye = yield x(b);
                        fe.result = ye[0] || null
                    })).apply(this, arguments)
                }

                function we() {
                    return (we = (0, p.Z)(function*(b, fe) {
                        if (!P) throw H.Sy.rpc.methodNotSupported();
                        const ye = b.params[0] || {
                            from: ""
                        };
                        ye.from = yield ie(ye.from, b), fe.result = yield P(ye, b)
                    })).apply(this, arguments)
                }

                function Ee() {
                    return (Ee = (0, p.Z)(function*(b, fe) {
                        if (!R) throw H.Sy.rpc.methodNotSupported();
                        const ye = b.params[0] || {
                            from: ""
                        };
                        ye.from = yield ie(ye.from, b), fe.result = yield R(ye, b)
                    })).apply(this, arguments)
                }

                function ve() {
                    return (ve = (0, p.Z)(function*(b, fe) {
                        if (!e) throw H.Sy.rpc.methodNotSupported();
                        const ye = yield ie(b.params[0], b), _e = b.params[1], Se = X(X({}, b.params[2] || {}), {}, {
                            from: ye,
                            data: _e
                        });
                        fe.result = yield e(Se, b)
                    })).apply(this, arguments)
                }

                function le() {
                    return (le = (0, p.Z)(function*(b, fe) {
                        if (!z) throw H.Sy.rpc.methodNotSupported();
                        const ye = b.params[0],
                            _e = yield ie(b.params[1], b), Ne = X(X({}, b.params[2] || {}), {}, {
                                from: _e,
                                data: ye
                            });
                        fe.result = yield z(Ne, b, "V1")
                    })).apply(this, arguments)
                }

                function ae() {
                    return (ae = (0, p.Z)(function*(b, fe) {
                        if (!$) throw H.Sy.rpc.methodNotSupported();
                        const ye = yield ie(b.params[0], b), Se = {
                            data: b.params[1],
                            from: ye,
                            version: "V3"
                        };
                        fe.result = yield $(Se, b, "V3")
                    })).apply(this, arguments)
                }

                function J() {
                    return (J = (0, p.Z)(function*(b, fe) {
                        if (!oe) throw H.Sy.rpc.methodNotSupported();
                        const ye = yield ie(b.params[0], b), Se = {
                            data: b.params[1],
                            from: ye,
                            version: "V4"
                        };
                        fe.result = yield oe(Se, b, "V4")
                    })).apply(this, arguments)
                }

                function Q() {
                    return (Q = (0, p.Z)(function*(b, fe) {
                        if (!u) throw H.Sy.rpc.methodNotSupported();
                        const ye = b.params[0],
                            _e = b.params[1],
                            xe = b.params[2] || {};
                        let Se, Ne;
                        if (q(ye) && !q(_e)) {
                            let He = "The eth_personalSign method requires params ordered ";
                            He += "[message, address]. This was previously handled incorrectly, ", He += "and has been corrected automatically. ", He += "Please switch this param order for smooth behavior in the future.", fe.warning = He, Se = ye, Ne = _e
                        } else Ne = ye, Se = _e;
                        Se = yield ie(Se, b);
                        const ht = X(X({}, xe), {}, {
                            from: Se,
                            data: Ne
                        });
                        fe.result = yield u(ht, b)
                    })).apply(this, arguments)
                }

                function ne() {
                    return (ne = (0, p.Z)(function*(b, fe) {
                        if (!i) throw H.Sy.rpc.methodNotSupported();
                        const ye = yield ie(b.params[0], b);
                        fe.result = yield i(ye, b)
                    })).apply(this, arguments)
                }

                function Oe() {
                    return (Oe = (0, p.Z)(function*(b, fe) {
                        if (!n) throw H.Sy.rpc.methodNotSupported();
                        const ye = b.params[0],
                            _e = yield ie(b.params[1], b), Se = X(X({}, b.params[2] || {}), {}, {
                                from: _e,
                                data: ye
                            });
                        fe.result = n(Se, b)
                    })).apply(this, arguments)
                }

                function Ce(b, fe) {
                    return ke.apply(this, arguments)
                }

                function ke() {
                    return (ke = (0, p.Z)(function*(b, fe) {
                        if (!t) throw H.Sy.rpc.methodNotSupported();
                        fe.result = t(b)
                    })).apply(this, arguments)
                }
                return (0, A.v0)({
                    eth_accounts: (0, A.Pk)(function he(b, fe) {
                        return be.apply(this, arguments)
                    }),
                    eth_private_key: (0, A.Pk)(Ce),
                    private_key: (0, A.Pk)(Ce),
                    eth_coinbase: (0, A.Pk)(function Me(b, fe) {
                        return Ie.apply(this, arguments)
                    }),
                    eth_sendTransaction: (0, A.Pk)(function Te(b, fe) {
                        return we.apply(this, arguments)
                    }),
                    eth_signTransaction: (0, A.Pk)(function Ae(b, fe) {
                        return Ee.apply(this, arguments)
                    }),
                    eth_sign: (0, A.Pk)(function me(b, fe) {
                        return ve.apply(this, arguments)
                    }),
                    eth_signTypedData: (0, A.Pk)(function ue(b, fe) {
                        return le.apply(this, arguments)
                    }),
                    eth_signTypedData_v3: (0, A.Pk)(function pe(b, fe) {
                        return ae.apply(this, arguments)
                    }),
                    eth_signTypedData_v4: (0, A.Pk)(function W(b, fe) {
                        return J.apply(this, arguments)
                    }),
                    personal_sign: (0, A.Pk)(function te(b, fe) {
                        return Q.apply(this, arguments)
                    }),
                    eth_getEncryptionPublicKey: (0, A.Pk)(function ee(b, fe) {
                        return ne.apply(this, arguments)
                    }),
                    eth_decrypt: (0, A.Pk)(function Pe(b, fe) {
                        return Oe.apply(this, arguments)
                    })
                })
            }

            function r(N) {
                const {
                    getAccounts: x,
                    getPrivateKey: t,
                    processTransaction: n,
                    processSignTransaction: i,
                    processEthSignMessage: e,
                    processTypedMessage: u,
                    processTypedMessageV3: P,
                    processTypedMessageV4: R,
                    processPersonalMessage: z,
                    processEncryptionPublicKey: $,
                    processDecryptMessage: oe
                } = N;
                return (0, A.UZ)([(0, A.v0)({
                    eth_syncing: !1
                }), S({
                    getAccounts: x,
                    getPrivateKey: t,
                    processTransaction: n,
                    processEthSignMessage: e,
                    processSignTransaction: i,
                    processTypedMessage: u,
                    processTypedMessageV3: P,
                    processTypedMessageV4: R,
                    processPersonalMessage: z,
                    processEncryptionPublicKey: $,
                    processDecryptMessage: oe
                })])
            }

            function a(N) {
                let {
                    addChain: x,
                    switchChain: t
                } = N;

                function i() {
                    return (i = (0, p.Z)(function*(P, R) {
                        var z;
                        const $ = null !== (z = P.params) && void 0 !== z && z.length ? P.params[0] : void 0;
                        if (!$) throw H.Sy.rpc.invalidParams("Missing chain params");
                        if (!$.chainId) throw H.Sy.rpc.invalidParams("Missing chainId in chainParams");
                        if (!$.rpcUrls || 0 === $.rpcUrls.length) throw H.Sy.rpc.invalidParams("Missing rpcUrls in chainParams");
                        if (!$.nativeCurrency) throw H.Sy.rpc.invalidParams("Missing nativeCurrency in chainParams");
                        R.result = yield x($)
                    })).apply(this, arguments)
                }

                function u() {
                    return (u = (0, p.Z)(function*(P, R) {
                        var z;
                        const $ = null !== (z = P.params) && void 0 !== z && z.length ? P.params[0] : void 0;
                        if (!$) throw H.Sy.rpc.invalidParams("Missing chainId");
                        R.result = yield t($)
                    })).apply(this, arguments)
                }
                return (0, A.v0)({
                    wallet_addEthereumChain: (0, A.Pk)(function n(P, R) {
                        return i.apply(this, arguments)
                    }),
                    wallet_switchEthereumChain: (0, A.Pk)(function e(P, R) {
                        return u.apply(this, arguments)
                    })
                })
            }

            function E(N) {
                return (x, t, n, i) => "eth_chainId" === x.method ? (t.result = N, i()) : n()
            }

            function T(N) {
                return (x, t, n, i) => "eth_provider_config" === x.method ? (t.result = N, i()) : n()
            }

            function D(N) {
                const {
                    chainId: x,
                    rpcTarget: t
                } = N, n = (0, B.v$)({
                    rpcTarget: t
                });
                return {
                    networkMiddleware: (0, A.UZ)([E(x), T(N), n]),
                    fetchMiddleware: n
                }
            }

            function M(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function o(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? M(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }
            class I extends h.Zk {
                constructor(x) {
                    let {
                        config: t,
                        state: n,
                        connector: i
                    } = x;
                    super({
                        config: {
                            chainConfig: o(o({}, t.chainConfig), {}, {
                                chainNamespace: G.CHAIN_NAMESPACES.EIP155
                            }),
                            skipLookupNetwork: !!t.skipLookupNetwork
                        },
                        state: o(o({}, n || {}), {}, {
                            chainId: "loading",
                            accounts: []
                        })
                    }), (0, l.Z)(this, "connector", null), this.connector = i || null
                }
                enable() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x.connector) throw H.Sy.provider.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        return yield x.setupProvider(x.connector), x._providerEngineProxy.request({
                            method: "eth_accounts"
                        })
                    })()
                }
                setupProvider(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        t.onConnectorStateUpdate(x), yield t.setupEngine(x)
                    })()
                }
                switchChain(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        let {
                            chainId: n,
                            addChain: i = !0,
                            lookup: e = !0
                        } = x;
                        if (!t.connector) throw H.Sy.provider.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        const u = t.getChainConfig(n);
                        t.update({
                            chainId: "loading"
                        });
                        const {
                            rpcTarget: P,
                            displayName: R
                        } = u;
                        if (i) try {
                            yield t.connector.sendCustomRequest({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: n,
                                    chainName: R,
                                    rpcUrls: [P],
                                    blockExplorerUrls: [u.blockExplorer],
                                    nativeCurrency: {
                                        name: u.tickerName,
                                        symbol: u.ticker,
                                        decimals: u.decimals || 18
                                    }
                                }]
                            })
                        } catch (z) {
                            G.log.error(z)
                        }
                        try {
                            yield t.connector.sendCustomRequest({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: n
                                }]
                            })
                        } catch (z) {
                            if (G.log.error(z), "JSON RPC response format is invalid" !== z.message) throw z
                        }
                        t.configure({
                            chainConfig: u
                        }), e && (yield t.lookupNetwork(t.connector))
                    })()
                }
                addChain(x) {
                    var t = () => super.addChain,
                        n = this;
                    return (0, p.Z)(function*() {
                        if (!n.connector) throw G.Ty.notReady("Wallet adapter is not ready yet");
                        const {
                            rpcTarget: i,
                            displayName: e
                        } = x;
                        try {
                            yield n.connector.sendCustomRequest({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: x.chainId,
                                    chainName: e,
                                    rpcUrls: [i],
                                    blockExplorerUrls: [x.blockExplorer],
                                    nativeCurrency: {
                                        name: x.tickerName,
                                        symbol: x.ticker,
                                        decimals: x.decimals || 18
                                    }
                                }]
                            }), t().call(n, x)
                        } catch (u) {
                            throw G.log.error(u), u
                        }
                    })()
                }
                lookupNetwork(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        if (!x.connected) throw G.RM.notConnectedError("Wallet connect connector is not connected");
                        if (!t.provider) throw H.Sy.provider.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        const {
                            chainId: n
                        } = t.config.chainConfig, i = (0, G.H2)(x.chainId.toString()) ? x.chainId : `0x${x.chainId.toString(16)}`;
                        if (n !== i) throw G.Ty.rpcConnectionError(`Invalid network, net_version is: ${i}, expected: ${n}`);
                        return t.provider.emit("connect", {
                            chainId: n
                        }), t.provider.emit("chainChanged", t.state.chainId), i
                    })()
                }
                setupEngine(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const n = function j(N) {
                            let {
                                connector: x
                            } = N;
                            return {
                                getPrivateKey: (t = (0, p.Z)(function*() {
                                    throw H.Sy.rpc.methodNotSupported()
                                }), function() {
                                    return t.apply(this, arguments)
                                }),
                                getAccounts: function() {
                                    var t = (0, p.Z)(function*(n) {
                                        const {
                                            accounts: i
                                        } = x;
                                        if (i && i.length) return i;
                                        throw new Error("Failed to get accounts")
                                    });
                                    return function(i) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processTransaction: function() {
                                    var t = (0, p.Z)(function*(n, i) {
                                        return yield x.sendTransaction(n)
                                    });
                                    return function(i, e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processSignTransaction: function() {
                                    var t = (0, p.Z)(function*(n, i) {
                                        return yield x.signTransaction(n)
                                    });
                                    return function(i, e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processEthSignMessage: function() {
                                    var t = (0, p.Z)(function*(n, i) {
                                        return yield x.signMessage([n.from, n.data])
                                    });
                                    return function(i, e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processPersonalMessage: function() {
                                    var t = (0, p.Z)(function*(n, i) {
                                        return yield x.signPersonalMessage([n.data, n.from])
                                    });
                                    return function(i, e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessage: function() {
                                    var t = (0, p.Z)(function*(n, i) {
                                        return yield x.signTypedData([n.from, n.data])
                                    });
                                    return function(i, e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV3: function() {
                                    var t = (0, p.Z)(function*(n) {
                                        return yield x.signTypedData([n.from, n.data])
                                    });
                                    return function(i) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV4: function() {
                                    var t = (0, p.Z)(function*(n) {
                                        return yield x.signTypedData([n.from, n.data])
                                    });
                                    return function(i) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processEncryptionPublicKey: function() {
                                    var t = (0, p.Z)(function*(n) {
                                        throw H.Sy.rpc.methodNotSupported()
                                    });
                                    return function(i) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                processDecryptMessage: t => {
                                    throw H.Sy.rpc.methodNotSupported()
                                }
                            };
                            var t
                        }({
                            connector: x
                        });
                        t.update({
                            accounts: x.accounts || []
                        });
                        const i = r(n),
                            e = new A.eI,
                            {
                                networkMiddleware: u
                            } = D(t.config.chainConfig);
                        e.push(i), e.push(u);
                        const P = (0, A.Xj)(e);
                        t.updateProviderEngineProxy(P), t.config.skipLookupNetwork || (yield t.lookupNetwork(x))
                    })()
                }
                onConnectorStateUpdate(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        x.on("session_update", function() {
                            var n = (0, p.Z)(function*(i, e) {
                                if (!t.provider) throw G.RM.notConnectedError("Wallet connect connector is not connected");
                                if (i) return void t.provider.emit("error", i);
                                const {
                                    accounts: u,
                                    chainId: P,
                                    rpcUrl: R
                                } = e.params[0];
                                null != u && u.length && t.state.accounts[0] !== u[0] && (t.update({
                                    accounts: u
                                }), t.provider.emit("accountsChanged", u));
                                const z = `0x${P.toString(16)}`;
                                if (P && t.state.chainId !== z) {
                                    const $ = (0, G.h2)(G.CHAIN_NAMESPACES.EIP155, P) || {};
                                    t.configure({
                                        chainConfig: o(o({}, $), {}, {
                                            chainId: z,
                                            rpcTarget: R,
                                            chainNamespace: G.CHAIN_NAMESPACES.EIP155
                                        })
                                    }), yield t.setupEngine(x)
                                }
                            });
                            return function(i, e) {
                                return n.apply(this, arguments)
                            }
                        }())
                    })()
                }
            }

            function ge(N) {
                return de.apply(this, arguments)
            }

            function de() {
                return (de = (0, p.Z)(function*(N) {
                    return N.session.length ? N.session.get(N.session.keys[N.session.keys.length - 1]) : null
                })).apply(this, arguments)
            }

            function ce(N, x, t, n) {
                return se.apply(this, arguments)
            }

            function se() {
                return (se = (0, p.Z)(function*(N, x, t, n) {
                    const i = yield ge(N);
                    if (!i) throw H.Sy.provider.disconnected();
                    return N.request({
                        topic: i.topic,
                        chainId: `eip155:${x}`,
                        request: {
                            method: t,
                            params: n
                        }
                    })
                })).apply(this, arguments)
            }

            function Be(N) {
                return Ge.apply(this, arguments)
            }

            function Ge() {
                return (Ge = (0, p.Z)(function*(N) {
                    const x = yield ge(N);
                    if (!x) throw H.Sy.provider.disconnected();
                    const t = (0, Z.gu)(x.namespaces);
                    if (t && t.length) return [...new Set(t.map(n => (0, Z.cw)(n).address))];
                    throw new Error("Failed to get accounts")
                })).apply(this, arguments)
            }

            function Re(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function Le(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? Re(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : Re(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }(0, l.Z)(I, "getProviderInstance", function() {
                var N = (0, p.Z)(function*(x) {
                    const t = new I({
                        config: {
                            chainConfig: x.chainConfig,
                            skipLookupNetwork: x.skipLookupNetwork
                        }
                    });
                    return yield t.setupProvider(x.connector), t
                });
                return function(x) {
                    return N.apply(this, arguments)
                }
            }());
            class St extends h.Zk {
                constructor(x) {
                    let {
                        config: t,
                        state: n,
                        connector: i
                    } = x;
                    super({
                        config: {
                            chainConfig: Le(Le({}, t.chainConfig), {}, {
                                chainNamespace: G.CHAIN_NAMESPACES.EIP155
                            }),
                            skipLookupNetwork: !!t.skipLookupNetwork
                        },
                        state: Le(Le({}, n || {}), {}, {
                            chainId: "loading",
                            accounts: []
                        })
                    }), (0, l.Z)(this, "connector", null), this.connector = i || null
                }
                enable() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x.connector) throw H.Sy.provider.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        return yield x.setupProvider(x.connector), x._providerEngineProxy.request({
                            method: "eth_accounts"
                        })
                    })()
                }
                setupProvider(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        t.onConnectorStateUpdate(x), yield t.setupEngine(x)
                    })()
                }
                switchChain(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        let {
                            chainId: n
                        } = x;
                        if (!t.connector) throw H.Sy.provider.custom({
                            message: "Connector is not initialized, pass wallet connect connector in constructor",
                            code: 4902
                        });
                        const i = t.getChainConfig(n);
                        t.configure({
                            chainConfig: i
                        }), yield t.setupEngine(t.connector)
                    })()
                }
                addChain(x) {
                    var t = () => super.addChain,
                        n = this;
                    return (0, p.Z)(function*() {
                        t().call(n, x)
                    })()
                }
                lookupNetwork(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        return t.config.chainConfig.chainId
                    })()
                }
                setupEngine(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const {
                            chainId: n
                        } = t.config.chainConfig, i = parseInt(n, 16), e = function wt(N) {
                            let {
                                connector: x,
                                chainId: t
                            } = N;
                            return {
                                getPrivateKey: (n = (0, p.Z)(function*() {
                                    throw H.Sy.rpc.methodNotSupported()
                                }), function() {
                                    return n.apply(this, arguments)
                                }),
                                getAccounts: function() {
                                    var n = (0, p.Z)(function*(i) {
                                        return Be(x)
                                    });
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processTransaction: function() {
                                    var n = (0, p.Z)(function*(i, e) {
                                        return yield ce(x, t, "eth_sendTransaction", [i])
                                    });
                                    return function(e, u) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processSignTransaction: function() {
                                    var n = (0, p.Z)(function*(i, e) {
                                        return yield ce(x, t, "eth_signTransaction", [i])
                                    });
                                    return function(e, u) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processEthSignMessage: function() {
                                    var n = (0, p.Z)(function*(i, e) {
                                        return yield ce(x, t, "eth_sign", [i.from, i.data])
                                    });
                                    return function(e, u) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processPersonalMessage: function() {
                                    var n = (0, p.Z)(function*(i, e) {
                                        return yield ce(x, t, "personal_sign", [i.from, i.data])
                                    });
                                    return function(e, u) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessage: function() {
                                    var n = (0, p.Z)(function*(i, e) {
                                        return yield ce(x, t, "eth_signTypedData", [i.data, i.from])
                                    });
                                    return function(e, u) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV3: function() {
                                    var n = (0, p.Z)(function*(i) {
                                        return yield ce(x, t, "eth_signTypedData_v3", [i.from, i.data])
                                    });
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processTypedMessageV4: function() {
                                    var n = (0, p.Z)(function*(i) {
                                        return yield ce(x, t, "eth_signTypedData_v4", [i.from, i.data])
                                    });
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processEncryptionPublicKey: function() {
                                    var n = (0, p.Z)(function*(i) {
                                        throw H.Sy.rpc.methodNotSupported()
                                    });
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                processDecryptMessage: n => {
                                    throw H.Sy.rpc.methodNotSupported()
                                }
                            };
                            var n
                        }({
                            connector: x,
                            chainId: i
                        }), u = yield Be(x);
                        t.update({
                            accounts: u || []
                        });
                        const P = r(e),
                            R = t.getChainSwitchMiddleware(),
                            z = new A.eI,
                            {
                                networkMiddleware: $
                            } = D(t.config.chainConfig);
                        z.push(P), z.push(R), z.push($);
                        const oe = (0, A.Xj)(z);
                        t.updateProviderEngineProxy(oe)
                    })()
                }
                getChainSwitchMiddleware() {
                    var x = this;
                    const t = {
                        addChain: (i = (0, p.Z)(function*(e) {
                            const {
                                chainId: u,
                                chainName: P,
                                rpcUrls: R,
                                blockExplorerUrls: z,
                                nativeCurrency: $
                            } = e;
                            x.addChain({
                                chainNamespace: G.CHAIN_NAMESPACES.EIP155,
                                chainId: u,
                                ticker: $ ? .symbol || "ETH",
                                tickerName: $ ? .name || "Ether",
                                displayName: P,
                                rpcTarget: R[0],
                                blockExplorer: z ? .[0] || "",
                                decimals: $ ? .decimals || 18
                            })
                        }), function(u) {
                            return i.apply(this, arguments)
                        }),
                        switchChain: function() {
                            var i = (0, p.Z)(function*(e) {
                                const {
                                    chainId: u
                                } = e;
                                yield x.switchChain({
                                    chainId: u
                                })
                            });
                            return function(u) {
                                return i.apply(this, arguments)
                            }
                        }()
                    };
                    var i;
                    return a(t)
                }
                connectedTopic() {
                    var x, t;
                    if (!this.connector) throw G.RM.notConnectedError("Wallet connect connector is not connected");
                    if (null !== (x = this.connector) && void 0 !== x && null !== (x = x.session) && void 0 !== x && x.length) return null === (t = this.connector.session.get(this.connector.session.keys[this.connector.session.keys.length - 1])) || void 0 === t ? void 0 : t.topic
                }
                checkIfChainIdAllowed(x) {
                    if (!this.connector || !this.connectedTopic()) return !1;
                    const t = this.connector.session.get(this.connectedTopic()),
                        n = (0, Z.uV)(t.namespaces);
                    let i = !1;
                    for (const e of n) {
                        const u = (0, Z.DQ)(e);
                        if (Number.parseInt(u.reference, 10) === Number.parseInt(x, 10)) {
                            i = !0;
                            break
                        }
                    }
                    return i
                }
                checkIfAccountAllowed(x) {
                    if (!this.connector || !this.connectedTopic()) return !1;
                    const t = this.connector.session.get(this.connectedTopic()),
                        n = (0, Z.gu)(t.namespaces);
                    let i = !1;
                    for (const u of n) {
                        var e;
                        if ((null === (e = (0, Z.cw)(u).address) || void 0 === e ? void 0 : e.toLowerCase()) === x ? .toLowerCase()) {
                            i = !0;
                            break
                        }
                    }
                    return i
                }
                onConnectorStateUpdate(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        x.events.on("session_event", function() {
                            var n = (0, p.Z)(function*(i) {
                                if (G.log.debug("session_event data", i), !t.provider) throw G.RM.notConnectedError("Wallet connect connector is not connected");
                                const {
                                    event: e
                                } = i.params, {
                                    name: u,
                                    data: P
                                } = e || {};
                                if ("accountsChanged" === u && null != P && P.length && t.state.accounts[0] !== P[0] && t.checkIfAccountAllowed(P[0]) && (t.update({
                                        accounts: P
                                    }), t.provider.emit("accountsChanged", P)), "chainChanged" === e.name) {
                                    const {
                                        chainId: R,
                                        rpcUrl: z
                                    } = P, $ = `0x${R.toString(16)}`;
                                    if (!t.checkIfChainIdAllowed($)) return;
                                    if ($ && t.state.chainId !== $) {
                                        const oe = (0, G.h2)(G.CHAIN_NAMESPACES.EIP155, $) || {};
                                        t.configure({
                                            chainConfig: Le(Le({}, oe), {}, {
                                                chainId: $,
                                                rpcTarget: z,
                                                chainNamespace: G.CHAIN_NAMESPACES.EIP155
                                            })
                                        }), yield t.setupEngine(x)
                                    }
                                }
                            });
                            return function(i) {
                                return n.apply(this, arguments)
                            }
                        }())
                    })()
                }
            }(0, l.Z)(St, "getProviderInstance", function() {
                var N = (0, p.Z)(function*(x) {
                    const t = new St({
                        config: {
                            chainConfig: x.chainConfig,
                            skipLookupNetwork: x.skipLookupNetwork
                        }
                    });
                    return yield t.setupProvider(x.connector), t
                });
                return function(x) {
                    return N.apply(this, arguments)
                }
            }());
            const Je = new _.Z("1e18"),
                nt = new _.Z("1e9"),
                kt = new _.Z("1"),
                ct = {
                    hex: N => new _.Z("string" == typeof N ? (0, O.stripHexPrefix)(N) : N, 16),
                    dec: N => new _.Z(N, 10)
                },
                dt = {
                    WEI: N => N.div(Je),
                    GWEI: N => N.div(nt),
                    ETH: N => N.div(kt)
                },
                Ct = {
                    WEI: N => N.times(Je).dp(0, _.Z.ROUND_HALF_UP),
                    GWEI: N => N.times(nt).dp(9, _.Z.ROUND_HALF_UP),
                    ETH: N => N.times(kt).dp(9, _.Z.ROUND_HALF_UP)
                },
                ft = {
                    hex: N => N.toString(16),
                    dec: N => new _.Z(N).toString(10)
                },
                Mt = (N, x) => {
                    let {
                        fromNumericBase: t = "hex",
                        toNumericBase: n,
                        fromDenomination: i,
                        toDenomination: e,
                        numberOfDecimals: u
                    } = x;
                    return (N => {
                        const {
                            value: x,
                            fromNumericBase: t,
                            fromDenomination: n,
                            toNumericBase: i,
                            toDenomination: e,
                            numberOfDecimals: u
                        } = N;
                        let P = ct[t](x);
                        return n && (P = dt[n](P)), e && (P = Ct[e](P)), u && (P = P.dp(u, _.Z.ROUND_HALF_DOWN)), i && (P = ft[i](P)), P
                    })({
                        fromNumericBase: t,
                        toNumericBase: n,
                        fromDenomination: i,
                        toDenomination: e,
                        numberOfDecimals: u,
                        value: N || "0"
                    })
                };

            function $e(N) {
                return Mt(N, {
                    fromNumericBase: "dec",
                    toNumericBase: "hex",
                    fromDenomination: "GWEI",
                    toDenomination: "WEI"
                })
            }

            function qe(N) {
                return Mt(N, {
                    fromNumericBase: "hex",
                    toNumericBase: "dec",
                    fromDenomination: "WEI",
                    toDenomination: "GWEI"
                })
            }

            function At(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function De(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? At(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : At(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }

            function ze(N) {
                return qe($e(N))
            }

            function It(N) {
                return We.apply(this, arguments)
            }

            function We() {
                return (We = (0, p.Z)(function*(N) {
                    const x = yield(0, f.U2)(N);
                    return De(De({}, x), {}, {
                        estimatedBaseFee: ze(x.estimatedBaseFee),
                        low: De(De({}, x.low), {}, {
                            suggestedMaxPriorityFeePerGas: ze(x.low.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: ze(x.low.suggestedMaxFeePerGas)
                        }),
                        medium: De(De({}, x.medium), {}, {
                            suggestedMaxPriorityFeePerGas: ze(x.medium.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: ze(x.medium.suggestedMaxFeePerGas)
                        }),
                        high: De(De({}, x.high), {}, {
                            suggestedMaxPriorityFeePerGas: ze(x.high.suggestedMaxPriorityFeePerGas),
                            suggestedMaxFeePerGas: ze(x.high.suggestedMaxFeePerGas)
                        })
                    })
                })).apply(this, arguments)
            }

            function it(N) {
                return Tt.apply(this, arguments)
            }

            function Tt() {
                return (Tt = (0, p.Z)(function*(N) {
                    const x = yield(0, f.U2)(N, {
                        referrer: N,
                        referrerPolicy: "no-referrer-when-downgrade",
                        method: "GET",
                        mode: "cors"
                    });
                    return {
                        low: x.SafeGasPrice,
                        medium: x.ProposeGasPrice,
                        high: x.FastGasPrice
                    }
                })).apply(this, arguments)
            }
            const ot = (N, x) => {
                var t;
                try {
                    c().ok(N && "object" == typeof N, "Params must be an object."), c().ok("data" in N, 'Params must include a "data" field.'), c().ok("from" in N, 'Params must include a "from" field.'), c().ok("string" == typeof N.from && (0, O.isValidAddress)(N.from), '"from" field must be a valid, lowercase, hexadecimal Ethereum address string.');
                    let n = null,
                        i = null;
                    switch (N.version) {
                        case d.SignTypedDataVersion.V1:
                            "string" == typeof N.data ? c().doesNotThrow(() => {
                                n = JSON.parse(N.data)
                            }, '"data" must be a valid JSON string.') : n = N.data, c().ok(Array.isArray(n), "params.data must be an array."), c().doesNotThrow(() => {
                                (0, d.typedSignatureHash)(n)
                            }, "Signing data must be valid EIP-712 typed data.");
                            break;
                        case d.SignTypedDataVersion.V3:
                        case d.SignTypedDataVersion.V4:
                            "string" == typeof N.data ? c().doesNotThrow(() => {
                                n = JSON.parse(N.data)
                            }, '"data" must be a valid JSON string.') : n = N.data, c().ok(n.primaryType in n.types, `Primary type of "${n.primaryType}" has no type definition.`);
                            const e = m.validate(n, d.TYPED_MESSAGE_SCHEMA.properties);
                            c().strictEqual(e.errors.length, 0, "Signing data must conform to EIP-712 schema. See https://git.io/fNtcx."), i = null === (t = n.domain) || void 0 === t ? void 0 : t.chainId, i && (c().ok(!Number.isNaN(x), `Cannot sign messages for chainId "${i}", because Web3Auth is switching networks.`), "string" == typeof i && (i = Number.parseInt(i, (0, G.H2)(i) ? 16 : 10)), c().strictEqual(i, x, `Provided chainId "${i}" must match the active chainId "${x}"`));
                            break;
                        default:
                            c().fail(`Unknown typed data version "${N.version}"`)
                    }
                } catch (n) {
                    throw H.Sy.rpc.invalidInput({
                        message: n ? .message
                    })
                }
            };

            function et(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function _t(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? et(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : et(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }

            function Ye(N, x, t) {
                return Ke.apply(this, arguments)
            }

            function Ke() {
                return (Ke = (0, p.Z)(function*(N, x, t) {
                    const n = yield t.formatTransaction(N), i = yield t.getCommonConfiguration();
                    return U.TransactionFactory.fromTxData(n, {
                        common: i
                    }).sign(Buffer.from(x, "hex")).serialize()
                })).apply(this, arguments)
            }

            function Et(N) {
                let {
                    txFormatter: x,
                    privKey: t,
                    getProviderEngineProxy: n
                } = N;
                return {
                    getAccounts: (i = (0, p.Z)(function*(e) {
                        return [`0x${(0,O.privateToAddress)(Buffer.from(t,"hex")).toString("hex")}`]
                    }), function(u) {
                        return i.apply(this, arguments)
                    }),
                    getPrivateKey: function() {
                        var i = (0, p.Z)(function*(e) {
                            return t
                        });
                        return function(u) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processTransaction: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            const P = n();
                            if (!P) throw H.Sy.provider.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const R = yield Ye(e, t, x);
                            return yield P.request({
                                method: "eth_sendRawTransaction",
                                params: ["0x".concat(R.toString("hex"))]
                            })
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processSignTransaction: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            if (!n()) throw H.Sy.provider.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            return `0x${(yield Ye(e,t,x)).toString("hex")}`
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processEthSignMessage: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            return (0, B.l)(t, e.data)
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processPersonalMessage: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            const P = Buffer.from(t, "hex");
                            return (0, d.personalSign)({
                                privateKey: P,
                                data: e.data
                            })
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processTypedMessage: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            G.log.debug("processTypedMessage", e);
                            const P = Buffer.from(t, "hex"),
                                R = n();
                            if (!R) throw H.Sy.provider.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const z = yield R.request({
                                method: "eth_chainId"
                            }), $ = Number.parseInt(z, (0, G.H2)(z) ? 16 : 10), oe = _t(_t({}, e), {}, {
                                version: d.SignTypedDataVersion.V1
                            });
                            ot(oe, $);
                            const ie = "string" == typeof oe.data ? JSON.parse(oe.data) : oe.data;
                            return (0, d.signTypedData)({
                                privateKey: P,
                                data: ie,
                                version: d.SignTypedDataVersion.V1
                            })
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processTypedMessageV3: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            G.log.debug("processTypedMessageV3", e);
                            const P = Buffer.from(t, "hex"),
                                R = n();
                            if (!R) throw H.Sy.provider.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const z = yield R.request({
                                method: "eth_chainId"
                            }), $ = Number.parseInt(z, (0, G.H2)(z) ? 16 : 10);
                            ot(e, $);
                            const oe = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                            return (0, d.signTypedData)({
                                privateKey: P,
                                data: oe,
                                version: d.SignTypedDataVersion.V3
                            })
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processTypedMessageV4: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            G.log.debug("processTypedMessageV4", e);
                            const P = Buffer.from(t, "hex"),
                                R = n();
                            if (!R) throw H.Sy.provider.custom({
                                message: "Provider is not initialized",
                                code: 4902
                            });
                            const z = yield R.request({
                                method: "eth_chainId"
                            }), $ = Number.parseInt(z, (0, G.H2)(z) ? 16 : 10);
                            ot(e, $);
                            const oe = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                            return (0, d.signTypedData)({
                                privateKey: P,
                                data: oe,
                                version: d.SignTypedDataVersion.V4
                            })
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processEncryptionPublicKey: function() {
                        var i = (0, p.Z)(function*(e, u) {
                            return G.log.info("processEncryptionPublicKey", e), (0, d.getEncryptionPublicKey)(t)
                        });
                        return function(u, P) {
                            return i.apply(this, arguments)
                        }
                    }(),
                    processDecryptMessage: (i, e) => {
                        G.log.info("processDecryptMessage", i);
                        const u = (0, O.stripHexPrefix)(i.data),
                            P = Buffer.from(u, "hex");
                        return (0, d.decrypt)({
                            encryptedData: JSON.parse(P.toString("utf8")),
                            privateKey: t
                        })
                    }
                };
                var i
            }

            function Ve(N) {
                return (0, O.addHexPrefix)(N.toString(16))
            }

            function Pt(N) {
                return re().isBN(N) ? N : new(re())((0, O.stripHexPrefix)(N), 16)
            }

            function Ze(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function Ue(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? Ze(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : Ze(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }
            class Bt {
                constructor(x) {
                    let {
                        getProviderEngineProxy: t
                    } = x;
                    (0, l.Z)(this, "chainConfig", null), (0, l.Z)(this, "getProviderEngineProxy", void 0), (0, l.Z)(this, "isEIP1559Compatible", !1), this.getProviderEngineProxy = t
                }
                get providerProxy() {
                    return this.getProviderEngineProxy()
                }
                init() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        x.chainConfig = yield x.providerProxy.request({
                            method: "eth_provider_config",
                            params: []
                        }), x.isEIP1559Compatible = yield x.getEIP1559Compatibility()
                    })()
                }
                getCommonConfiguration() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x.chainConfig) throw new Error("Chain config not initialized");
                        const {
                            displayName: t,
                            chainId: n
                        } = x.chainConfig, i = x.isEIP1559Compatible ? L.Hardfork.London : L.Hardfork.Berlin, e = {
                            name: t,
                            chainId: "loading" === n ? 0 : Number.parseInt(n, 16),
                            networkId: "loading" === n ? 0 : Number.parseInt(n, 16),
                            defaultHardfork: i
                        };
                        return L.Common.custom(e)
                    })()
                }
                formatTransaction(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        if (!t.chainConfig) throw new Error("Chain config not initialized");
                        const n = Ue({}, x);
                        if (void 0 === n.nonce && (n.nonce = yield t.providerProxy.request({
                                method: "eth_getTransactionCount",
                                params: [x.from, "latest"]
                            })), !t.isEIP1559Compatible && n.gasPrice) {
                            if (n.maxFeePerGas && delete n.maxFeePerGas, n.maxPriorityFeePerGas && delete n.maxPriorityFeePerGas, n.gas) n.gasLimit = n.gas;
                            else {
                                const P = yield t.getDefaultGasLimit(n);
                                P && (n.gasLimit = P)
                            }
                            return n
                        }
                        if (n.gas) n.gasLimit = n.gas;
                        else {
                            const P = yield t.getDefaultGasLimit(n);
                            P && (n.gasLimit = P)
                        }
                        const {
                            gasPrice: i,
                            maxFeePerGas: e,
                            maxPriorityFeePerGas: u
                        } = yield t.getDefaultGasFees(n);
                        return t.isEIP1559Compatible ? (!n.gasPrice || n.maxFeePerGas || n.maxPriorityFeePerGas ? (e && !n.maxFeePerGas && (n.maxFeePerGas = e), u && !n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = u), i && !n.maxFeePerGas && (n.maxFeePerGas = i), n.maxFeePerGas && !n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = n.maxFeePerGas)) : (n.maxFeePerGas = n.gasPrice, n.maxPriorityFeePerGas = function Xe(N, x) {
                            return null == N || null == x ? null : new _.O(N, 10).lt(x, 10)
                        }("string" == typeof u ? (0, O.stripHexPrefix)(u) : u, "string" == typeof n.gasPrice ? (0, O.stripHexPrefix)(n.gasPrice) : n.gasPrice) ? u : n.gasPrice), delete n.gasPrice) : (delete n.maxPriorityFeePerGas, delete n.maxFeePerGas), i && !n.gasPrice && !n.maxPriorityFeePerGas && !n.maxFeePerGas && (n.gasPrice = i), n.type = t.isEIP1559Compatible ? "0x2" : "0x0", n.chainId = t.chainConfig.chainId, n
                    })()
                }
                fetchEthGasPriceEstimate() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        return {
                            gasPrice: qe(yield x.providerProxy.request({
                                method: "eth_gasPrice",
                                params: []
                            })).toString()
                        }
                    })()
                }
                getEIP1559Compatibility() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        const t = yield x.providerProxy.request({
                            method: "eth_getBlockByNumber",
                            params: ["latest", !1]
                        });
                        return !(!t || void 0 === t.baseFeePerGas)
                    })()
                }
                fetchGasFeeEstimateData() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x.chainConfig) throw new Error("Chain config not initialized");
                        const t = "0x1" === x.chainConfig.chainId,
                            n = Number.parseInt(x.chainConfig.chainId, 16);
                        let i;
                        try {
                            if (x.isEIP1559Compatible) i = {
                                gasFeeEstimates: yield It("https://gas-api.metaswap.codefi.network/networks/<chain_id>/suggestedGasFees".replace("<chain_id>", `${n}`)), gasEstimateType: "fee-market"
                            };
                            else {
                                if (!t) throw new Error("Main gas fee/price estimation failed. Use fallback");
                                i = {
                                    gasFeeEstimates: yield it("https://gas-api.metaswap.codefi.network/networks/<chain_id>/gasPrices".replace("<chain_id>", `${n}`)), gasEstimateType: "legacy"
                                }
                            }
                        } catch {
                            try {
                                i = {
                                    gasFeeEstimates: yield x.fetchEthGasPriceEstimate(), gasEstimateType: "eth_gasPrice"
                                }
                            } catch (u) {
                                throw new Error(`Gas fee/price estimation failed. Message: ${u.message}`)
                            }
                        }
                        return i
                    })()
                }
                getDefaultGasFees(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        if (!t.isEIP1559Compatible && x.gasPrice || t.isEIP1559Compatible && x.maxFeePerGas && x.maxPriorityFeePerGas) return {};
                        try {
                            const {
                                gasFeeEstimates: i,
                                gasEstimateType: e
                            } = yield t.fetchGasFeeEstimateData();
                            if (t.isEIP1559Compatible && "fee-market" === e) {
                                const {
                                    medium: {
                                        suggestedMaxPriorityFeePerGas: u,
                                        suggestedMaxFeePerGas: P
                                    } = {}
                                } = i;
                                if (u && P) return {
                                    maxFeePerGas: (0, O.addHexPrefix)($e(P)),
                                    maxPriorityFeePerGas: (0, O.addHexPrefix)($e(u))
                                }
                            } else {
                                if ("legacy" === e) return {
                                    gasPrice: (0, O.addHexPrefix)($e(i.medium))
                                };
                                if ("eth_gasPrice" === e) return {
                                    gasPrice: (0, O.addHexPrefix)($e(i.gasPrice))
                                }
                            }
                        } catch (i) {
                            G.log.error(i)
                        }
                        const {
                            gasPrice: n
                        } = yield t.fetchEthGasPriceEstimate();
                        return {
                            gasPrice: (0, O.addHexPrefix)($e(n))
                        }
                    })()
                }
                estimateTxGas(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const n = Ue({}, x);
                        return delete n.gasPrice, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, yield t.providerProxy.request({
                            method: "eth_estimateGas",
                            params: [n]
                        })
                    })()
                }
                analyzeGasUsage(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const n = yield t.providerProxy.request({
                            method: "eth_getBlockByNumber",
                            params: ["latest", !1]
                        }), e = function Qe(N, x, t) {
                            const n = new(re())(x),
                                i = new(re())(t);
                            return N.mul(n).div(i)
                        }(Pt(n.gasLimit), 19, 20);
                        let u = Ve(e);
                        try {
                            u = yield t.estimateTxGas(x)
                        } catch (P) {
                            G.log.warn(P)
                        }
                        return {
                            blockGasLimit: n.gasLimit,
                            estimatedGasHex: u
                        }
                    })()
                }
                addGasBuffer(x, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1.5;
                    const i = Pt(x),
                        u = Pt(t).muln(.9),
                        P = i.muln(n);
                    return i.gt(u) ? Ve(i) : P.lt(u) ? Ve(P) : Ve(u)
                }
                determineTransactionCategory(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const {
                            data: n,
                            to: i
                        } = x;
                        let u, e = "";
                        if (n && !i) u = "contractDeployment";
                        else {
                            try {
                                e = yield t.providerProxy.request({
                                    method: "eth_getCode",
                                    params: [i, "latest"]
                                })
                            } catch (R) {
                                G.log.warn(R)
                            }
                            u = e && "0x" !== e && "0x0" !== e ? "contractInteraction" : "sentEther"
                        }
                        return {
                            transactionCategory: u,
                            code: e
                        }
                    })()
                }
                getDefaultGasLimit(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const {
                            transactionCategory: n
                        } = yield t.determineTransactionCategory(Ue({}, x));
                        if (x.gas) return x.gas;
                        if (x.to && "sentEther" === n) {
                            if (x.data) throw Error("TxGasUtil - Trying to call a function on a non-contract address");
                            return (0, O.addHexPrefix)(21e3.toString(16))
                        }
                        const {
                            blockGasLimit: i,
                            estimatedGasHex: e
                        } = yield t.analyzeGasUsage(x);
                        return t.addGasBuffer((0, O.addHexPrefix)(e), i)
                    })()
                }
            }

            function rt(N, x) {
                var t = Object.keys(N);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(N);
                    x && (n = n.filter(function(i) {
                        return Object.getOwnPropertyDescriptor(N, i).enumerable
                    })), t.push.apply(t, n)
                }
                return t
            }

            function at(N) {
                for (var x = 1; x < arguments.length; x++) {
                    var t = null != arguments[x] ? arguments[x] : {};
                    x % 2 ? rt(Object(t), !0).forEach(function(n) {
                        (0, l.Z)(N, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(t)) : rt(Object(t)).forEach(function(n) {
                        Object.defineProperty(N, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return N
            }
            class Ot extends h.Zk {
                constructor(x) {
                    let {
                        config: t,
                        state: n
                    } = x;
                    super({
                        config: {
                            chainConfig: at(at({}, t.chainConfig), {}, {
                                chainNamespace: G.CHAIN_NAMESPACES.EIP155
                            })
                        },
                        state: n
                    })
                }
                enable() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x.state.privateKey) throw H.Sy.provider.custom({
                            message: "Private key is not found in state, plz pass it in constructor state param",
                            code: 4902
                        });
                        return yield x.setupProvider(x.state.privateKey), x._providerEngineProxy.request({
                            method: "eth_accounts"
                        })
                    })()
                }
                setupProvider(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        const n = new Bt({
                                getProviderEngineProxy: t.getProviderEngineProxy.bind(t)
                            }),
                            e = r(Et({
                                txFormatter: n,
                                privKey: x,
                                getProviderEngineProxy: t.getProviderEngineProxy.bind(t)
                            })),
                            u = t.getChainSwitchMiddleware(),
                            P = new A.eI,
                            {
                                networkMiddleware: R
                            } = D(t.config.chainConfig);
                        P.push(e), P.push(u), P.push(t.getAccountMiddleware()), P.push(R);
                        const z = (0, A.Xj)(P);
                        t.updateProviderEngineProxy(z), yield n.init(), yield t.lookupNetwork()
                    })()
                }
                updateAccount(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        if (!t._providerEngineProxy) throw H.Sy.provider.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        (yield t._providerEngineProxy.request({
                            method: "eth_private_key"
                        })) !== x.privateKey && (yield t.setupProvider(x.privateKey), t._providerEngineProxy.emit("accountsChanged", {
                            accounts: yield t._providerEngineProxy.request({
                                method: "eth_accounts"
                            })
                        }))
                    })()
                }
                switchChain(x) {
                    var t = this;
                    return (0, p.Z)(function*() {
                        if (!t._providerEngineProxy) throw H.Sy.provider.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        const n = t.getChainConfig(x.chainId);
                        t.update({
                            chainId: "loading"
                        }), t.configure({
                            chainConfig: n
                        });
                        const i = yield t._providerEngineProxy.request({
                            method: "eth_private_key"
                        });
                        yield t.setupProvider(i)
                    })()
                }
                lookupNetwork() {
                    var x = this;
                    return (0, p.Z)(function*() {
                        if (!x._providerEngineProxy) throw H.Sy.provider.custom({
                            message: "Provider is not initialized",
                            code: 4902
                        });
                        const {
                            chainId: t
                        } = x.config.chainConfig;
                        if (!t) throw H.Sy.rpc.invalidParams("chainId is required while lookupNetwork");
                        const n = yield x._providerEngineProxy.request({
                            method: "net_version",
                            params: []
                        });
                        if (parseInt(t, 16) !== parseInt(n, 10)) throw H.Sy.provider.chainDisconnected(`Invalid network, net_version is: ${n}`);
                        return x.state.chainId !== t && (x._providerEngineProxy.emit("chainChanged", t), x._providerEngineProxy.emit("connect", {
                            chainId: t
                        })), x.update({
                            chainId: t
                        }), n
                    })()
                }
                getChainSwitchMiddleware() {
                    var x = this;
                    const t = {
                        addChain: (i = (0, p.Z)(function*(e) {
                            const {
                                chainId: u,
                                chainName: P,
                                rpcUrls: R,
                                blockExplorerUrls: z,
                                nativeCurrency: $
                            } = e;
                            x.addChain({
                                chainNamespace: G.CHAIN_NAMESPACES.EIP155,
                                chainId: u,
                                ticker: $ ? .symbol || "ETH",
                                tickerName: $ ? .name || "Ether",
                                displayName: P,
                                rpcTarget: R[0],
                                blockExplorer: z ? .[0] || "",
                                decimals: $ ? .decimals || 18
                            })
                        }), function(u) {
                            return i.apply(this, arguments)
                        }),
                        switchChain: function() {
                            var i = (0, p.Z)(function*(e) {
                                const {
                                    chainId: u
                                } = e;
                                yield x.switchChain({
                                    chainId: u
                                })
                            });
                            return function(u) {
                                return i.apply(this, arguments)
                            }
                        }()
                    };
                    var i;
                    return a(t)
                }
                getAccountMiddleware() {
                    var x = this;
                    const t = {
                        updatePrivatekey: (n = (0, p.Z)(function*(i) {
                            const {
                                privateKey: e
                            } = i;
                            yield x.updateAccount({
                                privateKey: e
                            })
                        }), function(e) {
                            return n.apply(this, arguments)
                        })
                    };
                    var n;
                    return function v(N) {
                        let {
                            updatePrivatekey: x
                        } = N;

                        function n() {
                            return (n = (0, p.Z)(function*(i, e) {
                                var u;
                                const P = null !== (u = i.params) && void 0 !== u && u.length ? i.params[0] : void 0;
                                if (null == P || !P.privateKey) throw H.Sy.rpc.invalidParams("Missing privateKey");
                                e.result = yield x(P)
                            })).apply(this, arguments)
                        }
                        return (0, A.v0)({
                            wallet_updateAccount: (0, A.Pk)(function t(i, e) {
                                return n.apply(this, arguments)
                            })
                        })
                    }(t)
                }
            }(0, l.Z)(Ot, "getProviderInstance", function() {
                var N = (0, p.Z)(function*(x) {
                    const t = new Ot({
                        config: {
                            chainConfig: x.chainConfig
                        }
                    });
                    return yield t.setupProvider(x.privKey), t
                });
                return function(x) {
                    return N.apply(this, arguments)
                }
            }())
        },
        68888: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.EthereumProviderError = k.EthereumRpcError = void 0;
            const p = C(38701);
            class l extends Error {
                constructor(B, Z, U) {
                    if (!Number.isInteger(B)) throw new Error('"code" must be an integer.');
                    if (!Z || "string" != typeof Z) throw new Error('"message" must be a nonempty string.');
                    super(Z), this.code = B, void 0 !== U && (this.data = U)
                }
                serialize() {
                    const B = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (B.data = this.data), this.stack && (B.stack = this.stack), B
                }
                toString() {
                    return p.default(this.serialize(), h, 2)
                }
            }

            function h(H, B) {
                if ("[Circular]" !== B) return B
            }
            k.EthereumRpcError = l, k.EthereumProviderError = class A extends l {
                constructor(B, Z, U) {
                    if (! function G(H) {
                            return Number.isInteger(H) && H >= 1e3 && H <= 4999
                        }(B)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(B, Z, U)
                }
            }
        },
        26998: (K, k) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.errorValues = k.errorCodes = void 0, k.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, k.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        49664: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.ethErrors = void 0;
            const p = C(68888),
                l = C(67285),
                A = C(26998);

            function G(B, Z) {
                const [U, w] = H(Z);
                return new p.EthereumRpcError(B, U || l.getMessageFromCode(B), w)
            }

            function h(B, Z) {
                const [U, w] = H(Z);
                return new p.EthereumProviderError(B, U || l.getMessageFromCode(B), w)
            }

            function H(B) {
                if (B) {
                    if ("string" == typeof B) return [B];
                    if ("object" == typeof B && !Array.isArray(B)) {
                        const {
                            message: Z,
                            data: U
                        } = B;
                        if (Z && "string" != typeof Z) throw new Error("Must specify string message.");
                        return [Z || void 0, U]
                    }
                }
                return []
            }
            k.ethErrors = {
                rpc: {
                    parse: B => G(A.errorCodes.rpc.parse, B),
                    invalidRequest: B => G(A.errorCodes.rpc.invalidRequest, B),
                    invalidParams: B => G(A.errorCodes.rpc.invalidParams, B),
                    methodNotFound: B => G(A.errorCodes.rpc.methodNotFound, B),
                    internal: B => G(A.errorCodes.rpc.internal, B),
                    server: B => {
                        if (!B || "object" != typeof B || Array.isArray(B)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: Z
                        } = B;
                        if (!Number.isInteger(Z) || Z > -32005 || Z < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return G(Z, B)
                    },
                    invalidInput: B => G(A.errorCodes.rpc.invalidInput, B),
                    resourceNotFound: B => G(A.errorCodes.rpc.resourceNotFound, B),
                    resourceUnavailable: B => G(A.errorCodes.rpc.resourceUnavailable, B),
                    transactionRejected: B => G(A.errorCodes.rpc.transactionRejected, B),
                    methodNotSupported: B => G(A.errorCodes.rpc.methodNotSupported, B),
                    limitExceeded: B => G(A.errorCodes.rpc.limitExceeded, B)
                },
                provider: {
                    userRejectedRequest: B => h(A.errorCodes.provider.userRejectedRequest, B),
                    unauthorized: B => h(A.errorCodes.provider.unauthorized, B),
                    unsupportedMethod: B => h(A.errorCodes.provider.unsupportedMethod, B),
                    disconnected: B => h(A.errorCodes.provider.disconnected, B),
                    chainDisconnected: B => h(A.errorCodes.provider.chainDisconnected, B),
                    custom: B => {
                        if (!B || "object" != typeof B || Array.isArray(B)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: Z,
                            message: U,
                            data: w
                        } = B;
                        if (!U || "string" != typeof U) throw new Error('"message" must be a nonempty string');
                        return new p.EthereumProviderError(Z, U, w)
                    }
                }
            }
        },
        4100: (K, k, C) => {
            "use strict";
            k.Sy = void 0;
            C(68888), C(67285);
            const G = C(49664);
            Object.defineProperty(k, "Sy", {
                enumerable: !0,
                get: function() {
                    return G.ethErrors
                }
            });
            C(26998)
        },
        67285: (K, k, C) => {
            "use strict";
            Object.defineProperty(k, "__esModule", {
                value: !0
            }), k.serializeError = k.isValidCode = k.getMessageFromCode = k.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const p = C(26998),
                l = C(68888),
                A = p.errorCodes.rpc.internal,
                h = {
                    code: A,
                    message: H(A)
                };

            function H(g, d = "Unspecified error message. This is a bug, please report it.") {
                if (Number.isInteger(g)) {
                    const y = g.toString();
                    if (O(p.errorValues, y)) return p.errorValues[y].message;
                    if (U(g)) return k.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return d
            }

            function B(g) {
                if (!Number.isInteger(g)) return !1;
                const d = g.toString();
                return !(!p.errorValues[d] && !U(g))
            }

            function U(g) {
                return g >= -32099 && g <= -32e3
            }

            function w(g) {
                return g && "object" == typeof g && !Array.isArray(g) ? Object.assign({}, g) : g
            }

            function O(g, d) {
                return Object.prototype.hasOwnProperty.call(g, d)
            }
            k.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", k.getMessageFromCode = H, k.isValidCode = B, k.serializeError = function Z(g, {
                fallbackError: d = h,
                shouldIncludeStack: y = !1
            } = {}) {
                var f, s;
                if (!d || !Number.isInteger(d.code) || "string" != typeof d.message) throw new Error("Must provide fallback error with integer number code and string message.");
                if (g instanceof l.EthereumRpcError) return g.serialize();
                const c = {};
                if (g && "object" == typeof g && !Array.isArray(g) && O(g, "code") && B(g.code)) {
                    const _ = g;
                    c.code = _.code, _.message && "string" == typeof _.message ? (c.message = _.message, O(_, "data") && (c.data = _.data)) : (c.message = H(c.code), c.data = {
                        originalError: w(g)
                    })
                } else {
                    c.code = d.code;
                    const _ = null === (f = g) || void 0 === f ? void 0 : f.message;
                    c.message = _ && "string" == typeof _ ? _ : d.message, c.data = {
                        originalError: w(g)
                    }
                }
                const m = null === (s = g) || void 0 === s ? void 0 : s.stack;
                return y && g && m && "string" == typeof m && (c.stack = m), c
            }
        },
        30171: (K, k) => {
            ! function(p) {
                p.version = "1.2.2";
                var A = function l() {
                    for (var V = 0, X = new Array(256), q = 0; 256 != q; ++q) X[q] = V = 1 & (V = 1 & (V = 1 & (V = 1 & (V = 1 & (V = 1 & (V = 1 & (V = 1 & (V = q) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1) ? -306674912 ^ V >>> 1 : V >>> 1;
                    return typeof Int32Array < "u" ? new Int32Array(X) : X
                }();
                var h = function G(V) {
                        var X = 0,
                            q = 0,
                            S = 0,
                            r = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
                        for (S = 0; 256 != S; ++S) r[S] = V[S];
                        for (S = 0; 256 != S; ++S)
                            for (q = V[S], X = 256 + S; X < 4096; X += 256) q = r[X] = q >>> 8 ^ V[255 & q];
                        var a = [];
                        for (S = 1; 16 != S; ++S) a[S - 1] = typeof Int32Array < "u" ? r.subarray(256 * S, 256 * S + 256) : r.slice(256 * S, 256 * S + 256);
                        return a
                    }(A),
                    H = h[0],
                    B = h[1],
                    Z = h[2],
                    U = h[3],
                    w = h[4],
                    O = h[5],
                    g = h[6],
                    d = h[7],
                    y = h[8],
                    f = h[9],
                    s = h[10],
                    c = h[11],
                    m = h[12],
                    _ = h[13],
                    L = h[14];
                p.table = A, p.bstr = function F(V, X) {
                    for (var q = -1 ^ X, S = 0, r = V.length; S < r;) q = q >>> 8 ^ A[255 & (q ^ V.charCodeAt(S++))];
                    return ~q
                }, p.buf = function Y(V, X) {
                    for (var q = -1 ^ X, S = V.length - 15, r = 0; r < S;) q = L[V[r++] ^ 255 & q] ^ _[V[r++] ^ q >> 8 & 255] ^ m[V[r++] ^ q >> 16 & 255] ^ c[V[r++] ^ q >>> 24] ^ s[V[r++]] ^ f[V[r++]] ^ y[V[r++]] ^ d[V[r++]] ^ g[V[r++]] ^ O[V[r++]] ^ w[V[r++]] ^ U[V[r++]] ^ Z[V[r++]] ^ B[V[r++]] ^ H[V[r++]] ^ A[V[r++]];
                    for (S += 15; r < S;) q = q >>> 8 ^ A[255 & (q ^ V[r++])];
                    return ~q
                }, p.str = function re(V, X) {
                    for (var q = -1 ^ X, S = 0, r = V.length, a = 0, v = 0; S < r;)(a = V.charCodeAt(S++)) < 128 ? q = q >>> 8 ^ A[255 & (q ^ a)] : a < 2048 ? q = (q = q >>> 8 ^ A[255 & (q ^ (192 | a >> 6 & 31))]) >>> 8 ^ A[255 & (q ^ (128 | 63 & a))] : a >= 55296 && a < 57344 ? (a = 64 + (1023 & a), v = 1023 & V.charCodeAt(S++), q = (q = (q = (q = q >>> 8 ^ A[255 & (q ^ (240 | a >> 8 & 7))]) >>> 8 ^ A[255 & (q ^ (128 | a >> 2 & 63))]) >>> 8 ^ A[255 & (q ^ (128 | v >> 6 & 15 | (3 & a) << 4))]) >>> 8 ^ A[255 & (q ^ (128 | 63 & v))]) : q = (q = (q = q >>> 8 ^ A[255 & (q ^ (224 | a >> 12 & 15))]) >>> 8 ^ A[255 & (q ^ (128 | a >> 6 & 63))]) >>> 8 ^ A[255 & (q ^ (128 | 63 & a))];
                    return ~q
                }
            }(typeof DO_NOT_EXPORT_CRC > "u" ? k : {})
        },
        18041: (K, k, C) => {
            "use strict";
            var p = C(79014),
                l = C(9648);

            function A(y) {
                var f = y;
                if ("string" != typeof f) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof f + ", while padToEven.");
                return f.length % 2 && (f = "0" + f), f
            }

            function G(y) {
                return "0x" + y.toString(16)
            }
            K.exports = {
                arrayContainsArray: function B(y, f, s) {
                    if (!0 !== Array.isArray(y)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof y + "'");
                    if (!0 !== Array.isArray(f)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof f + "'");
                    return f[s ? "some" : "every"](function(c) {
                        return y.indexOf(c) >= 0
                    })
                },
                intToBuffer: function h(y) {
                    var f = G(y);
                    return new Buffer(A(f.slice(2)), "hex")
                },
                getBinarySize: function H(y) {
                    if ("string" != typeof y) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof y + "'.");
                    return Buffer.byteLength(y, "utf8")
                },
                isHexPrefixed: p,
                stripHexPrefix: l,
                padToEven: A,
                intToHex: G,
                fromAscii: function O(y) {
                    for (var f = "", s = 0; s < y.length; s++) {
                        var m = y.charCodeAt(s).toString(16);
                        f += m.length < 2 ? "0" + m : m
                    }
                    return "0x" + f
                },
                fromUtf8: function w(y) {
                    return "0x" + A(new Buffer(y, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function U(y) {
                    var f = "",
                        s = 0,
                        c = y.length;
                    for ("0x" === y.substring(0, 2) && (s = 2); s < c; s += 2) {
                        var m = parseInt(y.substr(s, 2), 16);
                        f += String.fromCharCode(m)
                    }
                    return f
                },
                toUtf8: function Z(y) {
                    return new Buffer(A(l(y).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function g(y, f, s) {
                    if (!Array.isArray(y)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof y + "'");
                    if ("string" != typeof f) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof f + "'.");
                    for (var c = [], m = 0; m < y.length; m++) {
                        var _ = y[m][f];
                        if (s && !_) _ = "";
                        else if ("string" != typeof _) throw new Error("invalid abi");
                        c.push(_)
                    }
                    return c
                },
                isHexString: function d(y, f) {
                    return !("string" != typeof y || !y.match(/^0x[0-9A-Fa-f]*$/) || f && y.length !== 2 + 2 * f)
                }
            }
        },
        79014: K => {
            K.exports = function(C) {
                if ("string" != typeof C) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof C + ", while checking isHexPrefixed.");
                return "0x" === C.slice(0, 2)
            }
        },
        51384: (K, k, C) => {
            "use strict";
            var p = C(50806),
                l = p.ValidatorResult,
                A = p.SchemaError,
                G = {
                    ignoreProperties: {
                        id: !0,
                        default: !0,
                        description: !0,
                        title: !0,
                        additionalItems: !0,
                        then: !0,
                        else: !0,
                        $schema: !0,
                        $ref: !0,
                        extends: !0
                    }
                },
                h = G.validators = {};

            function H(O, g, d, y, f) {
                var s = g.throwError,
                    c = g.throwAll;
                g.throwError = !1, g.throwAll = !1;
                var m = this.validateSchema(O, f, g, d);
                return g.throwError = s, g.throwAll = c, !m.valid && y instanceof Function && y(m), m.valid
            }

            function B(O, g) {
                if (Object.hasOwnProperty.call(O, g)) return O[g];
                if (g in O)
                    for (; O = Object.getPrototypeOf(O);)
                        if (Object.propertyIsEnumerable.call(O, g)) return O[g]
            }

            function Z(O, g, d, y, f, s) {
                if (this.types.object(O) && (!g.properties || void 0 === g.properties[f]))
                    if (!1 === g.additionalProperties) s.addError({
                        name: "additionalProperties",
                        argument: f,
                        message: "is not allowed to have the additional property " + JSON.stringify(f)
                    });
                    else {
                        var c = g.additionalProperties || {};
                        "function" == typeof d.preValidateProperty && d.preValidateProperty(O, f, c, d, y);
                        var m = this.validateSchema(O[f], c, d, y.makeChild(c, f));
                        m.instance !== s.instance[f] && (s.instance[f] = m.instance), s.importErrors(m)
                    }
            }
            h.type = function(g, d, y, f) {
                if (void 0 === g) return null;
                var s = new l(g, d, y, f),
                    c = Array.isArray(d.type) ? d.type : [d.type];
                if (!c.some(this.testType.bind(this, g, d, y, f))) {
                    var m = c.map(function(_) {
                        if (_) {
                            var L = _.$id || _.id;
                            return L ? "<" + L + ">" : _ + ""
                        }
                    });
                    s.addError({
                        name: "type",
                        argument: m,
                        message: "is not of a type(s) " + m
                    })
                }
                return s
            }, h.anyOf = function(g, d, y, f) {
                if (void 0 === g) return null;
                var s = new l(g, d, y, f),
                    c = new l(g, d, y, f);
                if (!Array.isArray(d.anyOf)) throw new A("anyOf must be an array");
                if (!d.anyOf.some(H.bind(this, g, y, f, function(_) {
                        c.importErrors(_)
                    }))) {
                    var m = d.anyOf.map(function(_, L) {
                        var F = _.$id || _.id;
                        return F ? "<" + F + ">" : _.title && JSON.stringify(_.title) || _.$ref && "<" + _.$ref + ">" || "[subschema " + L + "]"
                    });
                    y.nestedErrors && s.importErrors(c), s.addError({
                        name: "anyOf",
                        argument: m,
                        message: "is not any of " + m.join(",")
                    })
                }
                return s
            }, h.allOf = function(g, d, y, f) {
                if (void 0 === g) return null;
                if (!Array.isArray(d.allOf)) throw new A("allOf must be an array");
                var s = new l(g, d, y, f),
                    c = this;
                return d.allOf.forEach(function(m, _) {
                    var L = c.validateSchema(g, m, y, f);
                    if (!L.valid) {
                        var Y = m.$id || m.id || m.title && JSON.stringify(m.title) || m.$ref && "<" + m.$ref + ">" || "[subschema " + _ + "]";
                        s.addError({
                            name: "allOf",
                            argument: {
                                id: Y,
                                length: L.errors.length,
                                valid: L
                            },
                            message: "does not match allOf schema " + Y + " with " + L.errors.length + " error[s]:"
                        }), s.importErrors(L)
                    }
                }), s
            }, h.oneOf = function(g, d, y, f) {
                if (void 0 === g) return null;
                if (!Array.isArray(d.oneOf)) throw new A("oneOf must be an array");
                var s = new l(g, d, y, f),
                    c = new l(g, d, y, f),
                    m = d.oneOf.filter(H.bind(this, g, y, f, function(L) {
                        c.importErrors(L)
                    })).length,
                    _ = d.oneOf.map(function(L, F) {
                        return L.$id || L.id || L.title && JSON.stringify(L.title) || L.$ref && "<" + L.$ref + ">" || "[subschema " + F + "]"
                    });
                return 1 !== m && (y.nestedErrors && s.importErrors(c), s.addError({
                    name: "oneOf",
                    argument: _,
                    message: "is not exactly one from " + _.join(",")
                })), s
            }, h.if = function(g, d, y, f) {
                if (void 0 === g) return null;
                if (!p.isSchema(d.if)) throw new Error('Expected "if" keyword to be a schema');
                var m, s = H.call(this, g, y, f, null, d.if),
                    c = new l(g, d, y, f);
                if (s) {
                    if (void 0 === d.then) return;
                    if (!p.isSchema(d.then)) throw new Error('Expected "then" keyword to be a schema');
                    m = this.validateSchema(g, d.then, y, f.makeChild(d.then)), c.importErrors(m)
                } else {
                    if (void 0 === d.else) return;
                    if (!p.isSchema(d.else)) throw new Error('Expected "else" keyword to be a schema');
                    m = this.validateSchema(g, d.else, y, f.makeChild(d.else)), c.importErrors(m)
                }
                return c
            }, h.propertyNames = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f),
                        c = void 0 !== d.propertyNames ? d.propertyNames : {};
                    if (!p.isSchema(c)) throw new A('Expected "propertyNames" to be a schema (object or boolean)');
                    for (var m in g)
                        if (void 0 !== B(g, m)) {
                            var _ = this.validateSchema(m, c, y, f.makeChild(c));
                            s.importErrors(_)
                        }
                    return s
                }
            }, h.properties = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f),
                        c = d.properties || {};
                    for (var m in c) {
                        var _ = c[m];
                        if (void 0 !== _) {
                            if (null === _) throw new A('Unexpected null, expected schema in "properties"');
                            "function" == typeof y.preValidateProperty && y.preValidateProperty(g, m, _, y, f);
                            var L = B(g, m),
                                F = this.validateSchema(L, _, y, f.makeChild(_, m));
                            F.instance !== s.instance[m] && (s.instance[m] = F.instance), s.importErrors(F)
                        }
                    }
                    return s
                }
            }, h.patternProperties = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f),
                        c = d.patternProperties || {};
                    for (var m in g) {
                        var _ = !0;
                        for (var L in c) {
                            var F = c[L];
                            if (void 0 !== F) {
                                if (null === F) throw new A('Unexpected null, expected schema in "patternProperties"');
                                try {
                                    var Y = new RegExp(L, "u")
                                } catch {
                                    Y = new RegExp(L)
                                }
                                if (Y.test(m)) {
                                    _ = !1, "function" == typeof y.preValidateProperty && y.preValidateProperty(g, m, F, y, f);
                                    var re = this.validateSchema(g[m], F, y, f.makeChild(F, m));
                                    re.instance !== s.instance[m] && (s.instance[m] = re.instance), s.importErrors(re)
                                }
                            }
                        }
                        _ && Z.call(this, g, d, y, f, m, s)
                    }
                    return s
                }
            }, h.additionalProperties = function(g, d, y, f) {
                if (this.types.object(g)) {
                    if (d.patternProperties) return null;
                    var s = new l(g, d, y, f);
                    for (var c in g) Z.call(this, g, d, y, f, c, s);
                    return s
                }
            }, h.minProperties = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f);
                    return Object.keys(g).length >= d.minProperties || s.addError({
                        name: "minProperties",
                        argument: d.minProperties,
                        message: "does not meet minimum property length of " + d.minProperties
                    }), s
                }
            }, h.maxProperties = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f);
                    return Object.keys(g).length <= d.maxProperties || s.addError({
                        name: "maxProperties",
                        argument: d.maxProperties,
                        message: "does not meet maximum property length of " + d.maxProperties
                    }), s
                }
            }, h.items = function(g, d, y, f) {
                var s = this;
                if (this.types.array(g) && void 0 !== d.items) {
                    var c = new l(g, d, y, f);
                    return g.every(function(m, _) {
                        if (Array.isArray(d.items)) var L = void 0 === d.items[_] ? d.additionalItems : d.items[_];
                        else L = d.items;
                        if (void 0 === L) return !0;
                        if (!1 === L) return c.addError({
                            name: "items",
                            message: "additionalItems not permitted"
                        }), !1;
                        var F = s.validateSchema(m, L, y, f.makeChild(L, _));
                        return F.instance !== c.instance[_] && (c.instance[_] = F.instance), c.importErrors(F), !0
                    }), c
                }
            }, h.contains = function(g, d, y, f) {
                var s = this;
                if (this.types.array(g) && void 0 !== d.contains) {
                    if (!p.isSchema(d.contains)) throw new Error('Expected "contains" keyword to be a schema');
                    var c = new l(g, d, y, f);
                    return !1 === g.some(function(_, L) {
                        return 0 === s.validateSchema(_, d.contains, y, f.makeChild(d.contains, L)).errors.length
                    }) && c.addError({
                        name: "contains",
                        argument: d.contains,
                        message: "must contain an item matching given schema"
                    }), c
                }
            }, h.minimum = function(g, d, y, f) {
                if (this.types.number(g)) {
                    var s = new l(g, d, y, f);
                    return d.exclusiveMinimum && !0 === d.exclusiveMinimum ? g > d.minimum || s.addError({
                        name: "minimum",
                        argument: d.minimum,
                        message: "must be greater than " + d.minimum
                    }) : g >= d.minimum || s.addError({
                        name: "minimum",
                        argument: d.minimum,
                        message: "must be greater than or equal to " + d.minimum
                    }), s
                }
            }, h.maximum = function(g, d, y, f) {
                if (this.types.number(g)) {
                    var s = new l(g, d, y, f);
                    return d.exclusiveMaximum && !0 === d.exclusiveMaximum ? g < d.maximum || s.addError({
                        name: "maximum",
                        argument: d.maximum,
                        message: "must be less than " + d.maximum
                    }) : g <= d.maximum || s.addError({
                        name: "maximum",
                        argument: d.maximum,
                        message: "must be less than or equal to " + d.maximum
                    }), s
                }
            }, h.exclusiveMinimum = function(g, d, y, f) {
                if ("boolean" != typeof d.exclusiveMinimum && this.types.number(g)) {
                    var s = new l(g, d, y, f);
                    return g > d.exclusiveMinimum || s.addError({
                        name: "exclusiveMinimum",
                        argument: d.exclusiveMinimum,
                        message: "must be strictly greater than " + d.exclusiveMinimum
                    }), s
                }
            }, h.exclusiveMaximum = function(g, d, y, f) {
                if ("boolean" != typeof d.exclusiveMaximum && this.types.number(g)) {
                    var s = new l(g, d, y, f);
                    return g < d.exclusiveMaximum || s.addError({
                        name: "exclusiveMaximum",
                        argument: d.exclusiveMaximum,
                        message: "must be strictly less than " + d.exclusiveMaximum
                    }), s
                }
            };
            var U = function(g, d, y, f, s, c) {
                if (this.types.number(g)) {
                    var m = d[s];
                    if (0 == m) throw new A(s + " cannot be zero");
                    var _ = new l(g, d, y, f),
                        L = p.getDecimalPlaces(g),
                        F = p.getDecimalPlaces(m),
                        Y = Math.max(L, F),
                        re = Math.pow(10, Y);
                    return Math.round(g * re) % Math.round(m * re) != 0 && _.addError({
                        name: s,
                        argument: m,
                        message: c + JSON.stringify(m)
                    }), _
                }
            };

            function w(O, g, d) {
                var y, f = d.length;
                for (y = g + 1; y < f; y++)
                    if (p.deepCompareStrict(O, d[y])) return !1;
                return !0
            }
            h.multipleOf = function(g, d, y, f) {
                return U.call(this, g, d, y, f, "multipleOf", "is not a multiple of (divisible by) ")
            }, h.divisibleBy = function(g, d, y, f) {
                return U.call(this, g, d, y, f, "divisibleBy", "is not divisible by (multiple of) ")
            }, h.required = function(g, d, y, f) {
                var s = new l(g, d, y, f);
                return void 0 === g && !0 === d.required ? s.addError({
                    name: "required",
                    message: "is required"
                }) : this.types.object(g) && Array.isArray(d.required) && d.required.forEach(function(c) {
                    void 0 === B(g, c) && s.addError({
                        name: "required",
                        argument: c,
                        message: "requires property " + JSON.stringify(c)
                    })
                }), s
            }, h.pattern = function(g, d, y, f) {
                if (this.types.string(g)) {
                    var s = new l(g, d, y, f),
                        c = d.pattern;
                    try {
                        var m = new RegExp(c, "u")
                    } catch {
                        m = new RegExp(c)
                    }
                    return g.match(m) || s.addError({
                        name: "pattern",
                        argument: d.pattern,
                        message: "does not match pattern " + JSON.stringify(d.pattern.toString())
                    }), s
                }
            }, h.format = function(g, d, y, f) {
                if (void 0 !== g) {
                    var s = new l(g, d, y, f);
                    return !s.disableFormat && !p.isFormat(g, d.format, this) && s.addError({
                        name: "format",
                        argument: d.format,
                        message: "does not conform to the " + JSON.stringify(d.format) + " format"
                    }), s
                }
            }, h.minLength = function(g, d, y, f) {
                if (this.types.string(g)) {
                    var s = new l(g, d, y, f),
                        c = g.match(/[\uDC00-\uDFFF]/g);
                    return g.length - (c ? c.length : 0) >= d.minLength || s.addError({
                        name: "minLength",
                        argument: d.minLength,
                        message: "does not meet minimum length of " + d.minLength
                    }), s
                }
            }, h.maxLength = function(g, d, y, f) {
                if (this.types.string(g)) {
                    var s = new l(g, d, y, f),
                        c = g.match(/[\uDC00-\uDFFF]/g);
                    return g.length - (c ? c.length : 0) <= d.maxLength || s.addError({
                        name: "maxLength",
                        argument: d.maxLength,
                        message: "does not meet maximum length of " + d.maxLength
                    }), s
                }
            }, h.minItems = function(g, d, y, f) {
                if (this.types.array(g)) {
                    var s = new l(g, d, y, f);
                    return g.length >= d.minItems || s.addError({
                        name: "minItems",
                        argument: d.minItems,
                        message: "does not meet minimum length of " + d.minItems
                    }), s
                }
            }, h.maxItems = function(g, d, y, f) {
                if (this.types.array(g)) {
                    var s = new l(g, d, y, f);
                    return g.length <= d.maxItems || s.addError({
                        name: "maxItems",
                        argument: d.maxItems,
                        message: "does not meet maximum length of " + d.maxItems
                    }), s
                }
            }, h.uniqueItems = function(g, d, y, f) {
                if (!0 === d.uniqueItems && this.types.array(g)) {
                    var s = new l(g, d, y, f);
                    return g.every(w) || s.addError({
                        name: "uniqueItems",
                        message: "contains duplicate item"
                    }), s
                }
            }, h.dependencies = function(g, d, y, f) {
                if (this.types.object(g)) {
                    var s = new l(g, d, y, f);
                    for (var c in d.dependencies)
                        if (void 0 !== g[c]) {
                            var m = d.dependencies[c],
                                _ = f.makeChild(m, c);
                            if ("string" == typeof m && (m = [m]), Array.isArray(m)) m.forEach(function(F) {
                                void 0 === g[F] && s.addError({
                                    name: "dependencies",
                                    argument: _.propertyPath,
                                    message: "property " + F + " not found, required by " + _.propertyPath
                                })
                            });
                            else {
                                var L = this.validateSchema(g, m, y, _);
                                s.instance !== L.instance && (s.instance = L.instance), L && L.errors.length && (s.addError({
                                    name: "dependencies",
                                    argument: _.propertyPath,
                                    message: "does not meet dependency required by " + _.propertyPath
                                }), s.importErrors(L))
                            }
                        }
                    return s
                }
            }, h.enum = function(g, d, y, f) {
                if (void 0 === g) return null;
                if (!Array.isArray(d.enum)) throw new A("enum expects an array", d);
                var s = new l(g, d, y, f);
                return d.enum.some(p.deepCompareStrict.bind(null, g)) || s.addError({
                    name: "enum",
                    argument: d.enum,
                    message: "is not one of enum values: " + d.enum.map(String).join(",")
                }), s
            }, h.const = function(g, d, y, f) {
                if (void 0 === g) return null;
                var s = new l(g, d, y, f);
                return p.deepCompareStrict(d.const, g) || s.addError({
                    name: "const",
                    argument: d.const,
                    message: "does not exactly match expected constant: " + d.const
                }), s
            }, h.not = h.disallow = function(g, d, y, f) {
                var s = this;
                if (void 0 === g) return null;
                var c = new l(g, d, y, f),
                    m = d.not || d.disallow;
                return m ? (Array.isArray(m) || (m = [m]), m.forEach(function(_) {
                    if (s.testType(g, d, y, f, _)) {
                        var F = _ && (_.$id || _.id) || _;
                        c.addError({
                            name: "not",
                            argument: F,
                            message: "is of prohibited type " + F
                        })
                    }
                }), c) : null
            }, K.exports = G
        },
        50806: (K, k, C) => {
            "use strict";
            var p = C(52445),
                l = k.ValidationError = function(s, c, m, _, L, F) {
                    Array.isArray(_) ? (this.path = _, this.property = _.reduce(function(re, V) {
                        return re + U(V)
                    }, "instance")) : void 0 !== _ && (this.property = _), s && (this.message = s), m && (this.schema = m.$id || m.id || m), void 0 !== c && (this.instance = c), this.name = L, this.argument = F, this.stack = this.toString()
                };
            l.prototype.toString = function() {
                return this.property + " " + this.message
            };
            var A = k.ValidatorResult = function(s, c, m, _) {
                this.instance = s, this.schema = c, this.options = m, this.path = _.path, this.propertyPath = _.propertyPath, this.errors = [], this.throwError = m && m.throwError, this.throwFirst = m && m.throwFirst, this.throwAll = m && m.throwAll, this.disableFormat = m && !0 === m.disableFormat
            };

            function G(f, s) {
                return s + ": " + f.toString() + "\n"
            }

            function h(f) {
                Error.captureStackTrace && Error.captureStackTrace(this, h), this.instance = f.instance, this.schema = f.schema, this.options = f.options, this.errors = f.errors
            }
            A.prototype.addError = function(s) {
                var c;
                if ("string" == typeof s) c = new l(s, this.instance, this.schema, this.path);
                else {
                    if (!s) throw new Error("Missing error detail");
                    if (!s.message) throw new Error("Missing error message");
                    if (!s.name) throw new Error("Missing validator type");
                    c = new l(s.message, this.instance, this.schema, this.path, s.name, s.argument)
                }
                if (this.errors.push(c), this.throwFirst) throw new h(this);
                if (this.throwError) throw c;
                return c
            }, A.prototype.importErrors = function(s) {
                "string" == typeof s || s && s.validatorType ? this.addError(s) : s && s.errors && (this.errors = this.errors.concat(s.errors))
            }, A.prototype.toString = function(s) {
                return this.errors.map(G).join("")
            }, Object.defineProperty(A.prototype, "valid", {
                get: function() {
                    return !this.errors.length
                }
            }), K.exports.ValidatorResultError = h, (h.prototype = new Error).constructor = h, h.prototype.name = "Validation Error";
            var H = k.SchemaError = function f(s, c) {
                this.message = s, this.schema = c, Error.call(this, s), Error.captureStackTrace(this, f)
            };
            H.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: H,
                    enumerable: !1
                },
                name: {
                    value: "SchemaError",
                    enumerable: !1
                }
            });
            var B = k.SchemaContext = function(s, c, m, _, L) {
                this.schema = s, this.options = c, Array.isArray(m) ? (this.path = m, this.propertyPath = m.reduce(function(F, Y) {
                    return F + U(Y)
                }, "instance")) : this.propertyPath = m, this.base = _, this.schemas = L
            };
            B.prototype.resolve = function(s) {
                return p.resolve(this.base, s)
            }, B.prototype.makeChild = function(s, c) {
                var m = void 0 === c ? this.path : this.path.concat([c]),
                    _ = s.$id || s.id,
                    L = p.resolve(this.base, _ || ""),
                    F = new B(s, this.options, m, L, Object.create(this.schemas));
                return _ && !F.schemas[L] && (F.schemas[L] = s), F
            };
            var Z = k.FORMAT_REGEXPS = {
                "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
                date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
                time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
                duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
                email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
                "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
                "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
                "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
                iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
                "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
                uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
                "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
                "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
                hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
                "utc-millisec": function(f) {
                    return "string" == typeof f && parseFloat(f) === parseInt(f, 10) && !isNaN(f)
                },
                regex: function(f) {
                    var s = !0;
                    try {
                        new RegExp(f)
                    } catch {
                        s = !1
                    }
                    return s
                },
                style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
                color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
                phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                alpha: /^[a-zA-Z]+$/,
                alphanumeric: /^[a-zA-Z0-9]+$/
            };
            Z.regexp = Z.regex, Z.pattern = Z.regex, Z.ipv4 = Z["ip-address"], k.isFormat = function(s, c, m) {
                if ("string" == typeof s && void 0 !== Z[c]) {
                    if (Z[c] instanceof RegExp) return Z[c].test(s);
                    if ("function" == typeof Z[c]) return Z[c](s)
                } else if (m && m.customFormats && "function" == typeof m.customFormats[c]) return m.customFormats[c](s);
                return !0
            };
            var U = k.makeSuffix = function(s) {
                return (s = s.toString()).match(/[.\s\[\]]/) || s.match(/^[\d]/) ? s.match(/^\d+$/) ? "[" + s + "]" : "[" + JSON.stringify(s) + "]" : "." + s
            };

            function w(f, s, c, m) {
                "object" == typeof c ? s[m] = d(f[m], c) : -1 === f.indexOf(c) && s.push(c)
            }

            function O(f, s, c) {
                s[c] = f[c]
            }

            function g(f, s, c, m) {
                c[m] = "object" == typeof s[m] && s[m] && f[m] ? d(f[m], s[m]) : s[m]
            }

            function d(f, s) {
                var c = Array.isArray(s),
                    m = c && [] || {};
                return c ? (m = m.concat(f = f || []), s.forEach(w.bind(null, f, m))) : (f && "object" == typeof f && Object.keys(f).forEach(O.bind(null, f, m)), Object.keys(s).forEach(g.bind(null, f, s, m))), m
            }

            function y(f) {
                return "/" + encodeURIComponent(f).replace(/~/g, "%7E")
            }
            k.deepCompareStrict = function f(s, c) {
                if (typeof s != typeof c) return !1;
                if (Array.isArray(s)) return !(!Array.isArray(c) || s.length !== c.length) && s.every(function(L, F) {
                    return f(s[F], c[F])
                });
                if ("object" == typeof s) {
                    if (!s || !c) return s === c;
                    var m = Object.keys(s),
                        _ = Object.keys(c);
                    return m.length === _.length && m.every(function(L) {
                        return f(s[L], c[L])
                    })
                }
                return s === c
            }, K.exports.deepMerge = d, k.objectGetPath = function(s, c) {
                for (var _, m = c.split("/").slice(1);
                    "string" == typeof(_ = m.shift());) {
                    var L = decodeURIComponent(_.replace(/~0/, "~").replace(/~1/g, "/"));
                    if (!(L in s)) return;
                    s = s[L]
                }
                return s
            }, k.encodePath = function(s) {
                return s.map(y).join("")
            }, k.getDecimalPlaces = function(s) {
                var c = 0;
                if (isNaN(s)) return c;
                "number" != typeof s && (s = Number(s));
                var m = s.toString().split("e");
                if (2 === m.length) {
                    if ("-" !== m[1][0]) return c;
                    c = Number(m[1].slice(1))
                }
                var _ = m[0].split(".");
                return 2 === _.length && (c += _[1].length), c
            }, k.isSchema = function(s) {
                return "object" == typeof s && s || "boolean" == typeof s
            }
        },
        75725: (K, k, C) => {
            "use strict";
            var p = K.exports.Validator = C(9711);
            K.exports.ValidatorResult = C(50806).ValidatorResult, K.exports.ValidatorResultError = C(50806).ValidatorResultError, K.exports.ValidationError = C(50806).ValidationError, K.exports.SchemaError = C(50806).SchemaError, K.exports.SchemaScanResult = C(19419).SchemaScanResult, K.exports.scan = C(19419).scan, K.exports.validate = function(l, A, G) {
                return (new p).validate(l, A, G)
            }
        },
        19419: (K, k, C) => {
            "use strict";
            var p = C(52445),
                l = C(50806);

            function A(G, h) {
                this.id = G, this.ref = h
            }
            K.exports.SchemaScanResult = A, K.exports.scan = function(h, H) {
                function B(g, d) {
                    if (d && "object" == typeof d) {
                        if (d.$ref) {
                            var y = p.resolve(g, d.$ref);
                            return void(O[y] = O[y] ? O[y] + 1 : 0)
                        }
                        var f = d.$id || d.id,
                            s = f ? p.resolve(g, f) : g;
                        if (s) {
                            if (s.indexOf("#") < 0 && (s += "#"), w[s]) {
                                if (!l.deepCompareStrict(w[s], d)) throw new Error("Schema <" + s + "> already exists with different definition");
                                return w[s]
                            }
                            w[s] = d, "#" == s[s.length - 1] && (w[s.substring(0, s.length - 1)] = d)
                        }
                        Z(s + "/items", Array.isArray(d.items) ? d.items : [d.items]), Z(s + "/extends", Array.isArray(d.extends) ? d.extends : [d.extends]), B(s + "/additionalItems", d.additionalItems), U(s + "/properties", d.properties), B(s + "/additionalProperties", d.additionalProperties), U(s + "/definitions", d.definitions), U(s + "/patternProperties", d.patternProperties), U(s + "/dependencies", d.dependencies), Z(s + "/disallow", d.disallow), Z(s + "/allOf", d.allOf), Z(s + "/anyOf", d.anyOf), Z(s + "/oneOf", d.oneOf), B(s + "/not", d.not)
                    }
                }

                function Z(g, d) {
                    if (Array.isArray(d))
                        for (var y = 0; y < d.length; y++) B(g + "/" + y, d[y])
                }

                function U(g, d) {
                    if (d && "object" == typeof d)
                        for (var y in d) B(g + "/" + y, d[y])
                }
                var w = {},
                    O = {};
                return B(h, H), new A(w, O)
            }
        },
        9711: (K, k, C) => {
            "use strict";
            var p = C(52445),
                l = C(51384),
                A = C(50806),
                G = C(19419).scan,
                h = A.ValidatorResult,
                H = A.ValidatorResultError,
                B = A.SchemaError,
                Z = A.SchemaContext,
                w = function d() {
                    this.customFormats = Object.create(d.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(g), this.attributes = Object.create(l.validators)
                };

            function O(d) {
                var y = "string" == typeof d ? d : d.$ref;
                return "string" == typeof y && y
            }
            w.prototype.customFormats = {}, w.prototype.schemas = null, w.prototype.types = null, w.prototype.attributes = null, w.prototype.unresolvedRefs = null, w.prototype.addSchema = function(y, f) {
                var s = this;
                if (!y) return null;
                var c = G(f || "/", y),
                    m = f || y.$id || y.id;
                for (var _ in c.id) this.schemas[_] = c.id[_];
                for (var _ in c.ref) this.unresolvedRefs.push(_);
                return this.unresolvedRefs = this.unresolvedRefs.filter(function(L) {
                    return typeof s.schemas[L] > "u"
                }), this.schemas[m]
            }, w.prototype.addSubSchemaArray = function(y, f) {
                if (Array.isArray(f))
                    for (var s = 0; s < f.length; s++) this.addSubSchema(y, f[s])
            }, w.prototype.addSubSchemaObject = function(y, f) {
                if (f && "object" == typeof f)
                    for (var s in f) this.addSubSchema(y, f[s])
            }, w.prototype.setSchemas = function(y) {
                this.schemas = y
            }, w.prototype.getSchema = function(y) {
                return this.schemas[y]
            }, w.prototype.validate = function(y, f, s, c) {
                if ("boolean" != typeof f && "object" != typeof f || null === f) throw new B("Expected `schema` to be an object or boolean");
                s || (s = {});
                var re, _ = p.resolve(s.base || "/", f.$id || f.id || "");
                if (!c) {
                    (c = new Z(f, s, [], _, Object.create(this.schemas))).schemas[_] || (c.schemas[_] = f);
                    var L = G(_, f);
                    for (var F in L.id) c.schemas[F] = L.id[F]
                }
                if (s.required && void 0 === y) return (re = new h(y, f, s, c)).addError("is required, but is undefined"), re;
                if (!(re = this.validateSchema(y, f, s, c))) throw new Error("Result undefined");
                if (s.throwAll && re.errors.length) throw new H(re);
                return re
            }, w.prototype.validateSchema = function(y, f, s, c) {
                var m = new h(y, f, s, c);
                if ("boolean" == typeof f) !0 === f ? f = {} : !1 === f && (f = {
                    type: []
                });
                else if (!f) throw new Error("schema is undefined");
                if (f.extends)
                    if (Array.isArray(f.extends)) {
                        var _ = {
                            schema: f,
                            ctx: c
                        };
                        f.extends.forEach(this.schemaTraverser.bind(this, _)), f = _.schema, _.schema = null, _.ctx = null, _ = null
                    } else f = A.deepMerge(f, this.superResolve(f.extends, c));
                var L = O(f);
                if (L) {
                    var F = this.resolve(f, L, c),
                        Y = new Z(F.subschema, s, c.path, F.switchSchema, c.schemas);
                    return this.validateSchema(y, F.subschema, s, Y)
                }
                var re = s && s.skipAttributes || [];
                for (var V in f)
                    if (!l.ignoreProperties[V] && re.indexOf(V) < 0) {
                        var X = null,
                            q = this.attributes[V];
                        if (q) X = q.call(this, y, f, s, c);
                        else if (!1 === s.allowUnknownAttributes) throw new B("Unsupported attribute: " + V, f);
                        X && m.importErrors(X)
                    }
                if ("function" == typeof s.rewrite) {
                    var S = s.rewrite.call(this, y, f, s, c);
                    m.instance = S
                }
                return m
            }, w.prototype.schemaTraverser = function(y, f) {
                y.schema = A.deepMerge(y.schema, this.superResolve(f, y.ctx))
            }, w.prototype.superResolve = function(y, f) {
                var s = O(y);
                return s ? this.resolve(y, s, f).subschema : y
            }, w.prototype.resolve = function(y, f, s) {
                if (f = s.resolve(f), s.schemas[f]) return {
                    subschema: s.schemas[f],
                    switchSchema: f
                };
                var c = p.parse(f),
                    m = c && c.hash,
                    _ = m && m.length && f.substr(0, f.length - m.length);
                if (!_ || !s.schemas[_]) throw new B("no such schema <" + f + ">", y);
                var L = A.objectGetPath(s.schemas[_], m.substr(1));
                if (void 0 === L) throw new B("no such schema " + m + " located in <" + _ + ">", y);
                return {
                    subschema: L,
                    switchSchema: f
                }
            }, w.prototype.testType = function(y, f, s, c, m) {
                if (void 0 !== m) {
                    if (null === m) throw new B('Unexpected null in "type" keyword');
                    if ("function" == typeof this.types[m]) return this.types[m].call(this, y);
                    if (m && "object" == typeof m) {
                        var _ = this.validateSchema(y, m, s, c);
                        return void 0 === _ || !(_ && _.errors.length)
                    }
                    return !0
                }
            };
            var g = w.prototype.types = {};
            g.string = function(y) {
                return "string" == typeof y
            }, g.number = function(y) {
                return "number" == typeof y && isFinite(y)
            }, g.integer = function(y) {
                return "number" == typeof y && y % 1 == 0
            }, g.boolean = function(y) {
                return "boolean" == typeof y
            }, g.array = function(y) {
                return Array.isArray(y)
            }, g.null = function(y) {
                return null === y
            }, g.date = function(y) {
                return y instanceof Date
            }, g.any = function(y) {
                return !0
            }, g.object = function(y) {
                return y && "object" == typeof y && !Array.isArray(y) && !(y instanceof Date)
            }, K.exports = w
        },
        9648: (K, k, C) => {
            var p = C(79014);
            K.exports = function(A) {
                return "string" != typeof A ? A : p(A) ? A.slice(2) : A
            }
        },
        14069: function(K) {
            ! function(k, C) {
                "use strict";
                K.exports ? K.exports = C() : (k.nacl || (k.nacl = {}), k.nacl.util = C())
            }(this, function() {
                "use strict";
                var k = {};

                function C(p) {
                    if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(p)) throw new TypeError("invalid encoding")
                }
                return k.decodeUTF8 = function(p) {
                    if ("string" != typeof p) throw new TypeError("expected string");
                    var l, A = unescape(encodeURIComponent(p)),
                        G = new Uint8Array(A.length);
                    for (l = 0; l < A.length; l++) G[l] = A.charCodeAt(l);
                    return G
                }, k.encodeUTF8 = function(p) {
                    var l, A = [];
                    for (l = 0; l < p.length; l++) A.push(String.fromCharCode(p[l]));
                    return decodeURIComponent(escape(A.join("")))
                }, typeof atob > "u" ? typeof Buffer.from < "u" ? (k.encodeBase64 = function(p) {
                    return Buffer.from(p).toString("base64")
                }, k.decodeBase64 = function(p) {
                    return C(p), new Uint8Array(Array.prototype.slice.call(Buffer.from(p, "base64"), 0))
                }) : (k.encodeBase64 = function(p) {
                    return new Buffer(p).toString("base64")
                }, k.decodeBase64 = function(p) {
                    return C(p), new Uint8Array(Array.prototype.slice.call(new Buffer(p, "base64"), 0))
                }) : (k.encodeBase64 = function(p) {
                    var l, A = [],
                        G = p.length;
                    for (l = 0; l < G; l++) A.push(String.fromCharCode(p[l]));
                    return btoa(A.join(""))
                }, k.decodeBase64 = function(p) {
                    C(p);
                    var l, A = atob(p),
                        G = new Uint8Array(A.length);
                    for (l = 0; l < A.length; l++) G[l] = A.charCodeAt(l);
                    return G
                }), k
            })
        },
        76543: (K, k, C) => {
            ! function(p) {
                "use strict";
                var l = function(t) {
                        var n, i = new Float64Array(16);
                        if (t)
                            for (n = 0; n < t.length; n++) i[n] = t[n];
                        return i
                    },
                    A = function() {
                        throw new Error("no PRNG")
                    },
                    G = new Uint8Array(16),
                    h = new Uint8Array(32);
                h[0] = 9;
                var H = l(),
                    B = l([1]),
                    Z = l([56129, 1]),
                    U = l([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    w = l([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    O = l([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    g = l([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    d = l([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function y(t, n, i, e) {
                    t[n] = i >> 24 & 255, t[n + 1] = i >> 16 & 255, t[n + 2] = i >> 8 & 255, t[n + 3] = 255 & i, t[n + 4] = e >> 24 & 255, t[n + 5] = e >> 16 & 255, t[n + 6] = e >> 8 & 255, t[n + 7] = 255 & e
                }

                function f(t, n, i, e, u) {
                    var P, R = 0;
                    for (P = 0; P < u; P++) R |= t[n + P] ^ i[e + P];
                    return (1 & R - 1 >>> 8) - 1
                }

                function s(t, n, i, e) {
                    return f(t, n, i, e, 16)
                }

                function c(t, n, i, e) {
                    return f(t, n, i, e, 32)
                }

                function L(t, n, i, e) {
                    ! function m(t, n, i, e) {
                        for (var b, u = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, P = 255 & i[0] | (255 & i[1]) << 8 | (255 & i[2]) << 16 | (255 & i[3]) << 24, R = 255 & i[4] | (255 & i[5]) << 8 | (255 & i[6]) << 16 | (255 & i[7]) << 24, z = 255 & i[8] | (255 & i[9]) << 8 | (255 & i[10]) << 16 | (255 & i[11]) << 24, $ = 255 & i[12] | (255 & i[13]) << 8 | (255 & i[14]) << 16 | (255 & i[15]) << 24, oe = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, ie = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, Fe = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, he = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, be = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, Me = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, Ie = 255 & i[16] | (255 & i[17]) << 8 | (255 & i[18]) << 16 | (255 & i[19]) << 24, Te = 255 & i[20] | (255 & i[21]) << 8 | (255 & i[22]) << 16 | (255 & i[23]) << 24, we = 255 & i[24] | (255 & i[25]) << 8 | (255 & i[26]) << 16 | (255 & i[27]) << 24, Ae = 255 & i[28] | (255 & i[29]) << 8 | (255 & i[30]) << 16 | (255 & i[31]) << 24, Ee = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, me = u, ve = P, ue = R, le = z, pe = $, ae = oe, W = ie, J = Fe, te = he, Q = be, ee = Me, ne = Ie, Pe = Te, Oe = we, Ce = Ae, ke = Ee, fe = 0; fe < 20; fe += 2) me ^= (b = (Pe ^= (b = (te ^= (b = (pe ^= (b = me + Pe | 0) << 7 | b >>> 25) + me | 0) << 9 | b >>> 23) + pe | 0) << 13 | b >>> 19) + te | 0) << 18 | b >>> 14, ae ^= (b = (ve ^= (b = (Oe ^= (b = (Q ^= (b = ae + ve | 0) << 7 | b >>> 25) + ae | 0) << 9 | b >>> 23) + Q | 0) << 13 | b >>> 19) + Oe | 0) << 18 | b >>> 14, ee ^= (b = (W ^= (b = (ue ^= (b = (Ce ^= (b = ee + W | 0) << 7 | b >>> 25) + ee | 0) << 9 | b >>> 23) + Ce | 0) << 13 | b >>> 19) + ue | 0) << 18 | b >>> 14, ke ^= (b = (ne ^= (b = (J ^= (b = (le ^= (b = ke + ne | 0) << 7 | b >>> 25) + ke | 0) << 9 | b >>> 23) + le | 0) << 13 | b >>> 19) + J | 0) << 18 | b >>> 14, me ^= (b = (le ^= (b = (ue ^= (b = (ve ^= (b = me + le | 0) << 7 | b >>> 25) + me | 0) << 9 | b >>> 23) + ve | 0) << 13 | b >>> 19) + ue | 0) << 18 | b >>> 14, ae ^= (b = (pe ^= (b = (J ^= (b = (W ^= (b = ae + pe | 0) << 7 | b >>> 25) + ae | 0) << 9 | b >>> 23) + W | 0) << 13 | b >>> 19) + J | 0) << 18 | b >>> 14, ee ^= (b = (Q ^= (b = (te ^= (b = (ne ^= (b = ee + Q | 0) << 7 | b >>> 25) + ee | 0) << 9 | b >>> 23) + ne | 0) << 13 | b >>> 19) + te | 0) << 18 | b >>> 14, ke ^= (b = (Ce ^= (b = (Oe ^= (b = (Pe ^= (b = ke + Ce | 0) << 7 | b >>> 25) + ke | 0) << 9 | b >>> 23) + Pe | 0) << 13 | b >>> 19) + Oe | 0) << 18 | b >>> 14;
                        ve = ve + P | 0, ue = ue + R | 0, le = le + z | 0, pe = pe + $ | 0, ae = ae + oe | 0, W = W + ie | 0, J = J + Fe | 0, te = te + he | 0, Q = Q + be | 0, ee = ee + Me | 0, ne = ne + Ie | 0, Pe = Pe + Te | 0, Oe = Oe + we | 0, Ce = Ce + Ae | 0, ke = ke + Ee | 0, t[0] = (me = me + u | 0) >>> 0 & 255, t[1] = me >>> 8 & 255, t[2] = me >>> 16 & 255, t[3] = me >>> 24 & 255, t[4] = ve >>> 0 & 255, t[5] = ve >>> 8 & 255, t[6] = ve >>> 16 & 255, t[7] = ve >>> 24 & 255, t[8] = ue >>> 0 & 255, t[9] = ue >>> 8 & 255, t[10] = ue >>> 16 & 255, t[11] = ue >>> 24 & 255, t[12] = le >>> 0 & 255, t[13] = le >>> 8 & 255, t[14] = le >>> 16 & 255, t[15] = le >>> 24 & 255, t[16] = pe >>> 0 & 255, t[17] = pe >>> 8 & 255, t[18] = pe >>> 16 & 255, t[19] = pe >>> 24 & 255, t[20] = ae >>> 0 & 255, t[21] = ae >>> 8 & 255, t[22] = ae >>> 16 & 255, t[23] = ae >>> 24 & 255, t[24] = W >>> 0 & 255, t[25] = W >>> 8 & 255, t[26] = W >>> 16 & 255, t[27] = W >>> 24 & 255, t[28] = J >>> 0 & 255, t[29] = J >>> 8 & 255, t[30] = J >>> 16 & 255, t[31] = J >>> 24 & 255, t[32] = te >>> 0 & 255, t[33] = te >>> 8 & 255, t[34] = te >>> 16 & 255, t[35] = te >>> 24 & 255, t[36] = Q >>> 0 & 255, t[37] = Q >>> 8 & 255, t[38] = Q >>> 16 & 255, t[39] = Q >>> 24 & 255, t[40] = ee >>> 0 & 255, t[41] = ee >>> 8 & 255, t[42] = ee >>> 16 & 255, t[43] = ee >>> 24 & 255, t[44] = ne >>> 0 & 255, t[45] = ne >>> 8 & 255, t[46] = ne >>> 16 & 255, t[47] = ne >>> 24 & 255, t[48] = Pe >>> 0 & 255, t[49] = Pe >>> 8 & 255, t[50] = Pe >>> 16 & 255, t[51] = Pe >>> 24 & 255, t[52] = Oe >>> 0 & 255, t[53] = Oe >>> 8 & 255, t[54] = Oe >>> 16 & 255, t[55] = Oe >>> 24 & 255, t[56] = Ce >>> 0 & 255, t[57] = Ce >>> 8 & 255, t[58] = Ce >>> 16 & 255, t[59] = Ce >>> 24 & 255, t[60] = ke >>> 0 & 255, t[61] = ke >>> 8 & 255, t[62] = ke >>> 16 & 255, t[63] = ke >>> 24 & 255
                    }(t, n, i, e)
                }

                function F(t, n, i, e) {
                    ! function _(t, n, i, e) {
                        for (var b, me = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, ve = 255 & i[0] | (255 & i[1]) << 8 | (255 & i[2]) << 16 | (255 & i[3]) << 24, ue = 255 & i[4] | (255 & i[5]) << 8 | (255 & i[6]) << 16 | (255 & i[7]) << 24, le = 255 & i[8] | (255 & i[9]) << 8 | (255 & i[10]) << 16 | (255 & i[11]) << 24, pe = 255 & i[12] | (255 & i[13]) << 8 | (255 & i[14]) << 16 | (255 & i[15]) << 24, ae = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, W = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, J = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, te = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, Q = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, ee = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, ne = 255 & i[16] | (255 & i[17]) << 8 | (255 & i[18]) << 16 | (255 & i[19]) << 24, Pe = 255 & i[20] | (255 & i[21]) << 8 | (255 & i[22]) << 16 | (255 & i[23]) << 24, Oe = 255 & i[24] | (255 & i[25]) << 8 | (255 & i[26]) << 16 | (255 & i[27]) << 24, Ce = 255 & i[28] | (255 & i[29]) << 8 | (255 & i[30]) << 16 | (255 & i[31]) << 24, ke = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, fe = 0; fe < 20; fe += 2) me ^= (b = (Pe ^= (b = (te ^= (b = (pe ^= (b = me + Pe | 0) << 7 | b >>> 25) + me | 0) << 9 | b >>> 23) + pe | 0) << 13 | b >>> 19) + te | 0) << 18 | b >>> 14, ae ^= (b = (ve ^= (b = (Oe ^= (b = (Q ^= (b = ae + ve | 0) << 7 | b >>> 25) + ae | 0) << 9 | b >>> 23) + Q | 0) << 13 | b >>> 19) + Oe | 0) << 18 | b >>> 14, ee ^= (b = (W ^= (b = (ue ^= (b = (Ce ^= (b = ee + W | 0) << 7 | b >>> 25) + ee | 0) << 9 | b >>> 23) + Ce | 0) << 13 | b >>> 19) + ue | 0) << 18 | b >>> 14, ke ^= (b = (ne ^= (b = (J ^= (b = (le ^= (b = ke + ne | 0) << 7 | b >>> 25) + ke | 0) << 9 | b >>> 23) + le | 0) << 13 | b >>> 19) + J | 0) << 18 | b >>> 14, me ^= (b = (le ^= (b = (ue ^= (b = (ve ^= (b = me + le | 0) << 7 | b >>> 25) + me | 0) << 9 | b >>> 23) + ve | 0) << 13 | b >>> 19) + ue | 0) << 18 | b >>> 14, ae ^= (b = (pe ^= (b = (J ^= (b = (W ^= (b = ae + pe | 0) << 7 | b >>> 25) + ae | 0) << 9 | b >>> 23) + W | 0) << 13 | b >>> 19) + J | 0) << 18 | b >>> 14, ee ^= (b = (Q ^= (b = (te ^= (b = (ne ^= (b = ee + Q | 0) << 7 | b >>> 25) + ee | 0) << 9 | b >>> 23) + ne | 0) << 13 | b >>> 19) + te | 0) << 18 | b >>> 14, ke ^= (b = (Ce ^= (b = (Oe ^= (b = (Pe ^= (b = ke + Ce | 0) << 7 | b >>> 25) + ke | 0) << 9 | b >>> 23) + Pe | 0) << 13 | b >>> 19) + Oe | 0) << 18 | b >>> 14;
                        t[0] = me >>> 0 & 255, t[1] = me >>> 8 & 255, t[2] = me >>> 16 & 255, t[3] = me >>> 24 & 255, t[4] = ae >>> 0 & 255, t[5] = ae >>> 8 & 255, t[6] = ae >>> 16 & 255, t[7] = ae >>> 24 & 255, t[8] = ee >>> 0 & 255, t[9] = ee >>> 8 & 255, t[10] = ee >>> 16 & 255, t[11] = ee >>> 24 & 255, t[12] = ke >>> 0 & 255, t[13] = ke >>> 8 & 255, t[14] = ke >>> 16 & 255, t[15] = ke >>> 24 & 255, t[16] = W >>> 0 & 255, t[17] = W >>> 8 & 255, t[18] = W >>> 16 & 255, t[19] = W >>> 24 & 255, t[20] = J >>> 0 & 255, t[21] = J >>> 8 & 255, t[22] = J >>> 16 & 255, t[23] = J >>> 24 & 255, t[24] = te >>> 0 & 255, t[25] = te >>> 8 & 255, t[26] = te >>> 16 & 255, t[27] = te >>> 24 & 255, t[28] = Q >>> 0 & 255, t[29] = Q >>> 8 & 255, t[30] = Q >>> 16 & 255, t[31] = Q >>> 24 & 255
                    }(t, n, i, e)
                }
                var Y = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function re(t, n, i, e, u, P, R) {
                    var oe, ie, z = new Uint8Array(16),
                        $ = new Uint8Array(64);
                    for (ie = 0; ie < 16; ie++) z[ie] = 0;
                    for (ie = 0; ie < 8; ie++) z[ie] = P[ie];
                    for (; u >= 64;) {
                        for (L($, z, R, Y), ie = 0; ie < 64; ie++) t[n + ie] = i[e + ie] ^ $[ie];
                        for (oe = 1, ie = 8; ie < 16; ie++) z[ie] = 255 & (oe = oe + (255 & z[ie]) | 0), oe >>>= 8;
                        u -= 64, n += 64, e += 64
                    }
                    if (u > 0)
                        for (L($, z, R, Y), ie = 0; ie < u; ie++) t[n + ie] = i[e + ie] ^ $[ie];
                    return 0
                }

                function V(t, n, i, e, u) {
                    var z, $, P = new Uint8Array(16),
                        R = new Uint8Array(64);
                    for ($ = 0; $ < 16; $++) P[$] = 0;
                    for ($ = 0; $ < 8; $++) P[$] = e[$];
                    for (; i >= 64;) {
                        for (L(R, P, u, Y), $ = 0; $ < 64; $++) t[n + $] = R[$];
                        for (z = 1, $ = 8; $ < 16; $++) P[$] = 255 & (z = z + (255 & P[$]) | 0), z >>>= 8;
                        i -= 64, n += 64
                    }
                    if (i > 0)
                        for (L(R, P, u, Y), $ = 0; $ < i; $++) t[n + $] = R[$];
                    return 0
                }

                function X(t, n, i, e, u) {
                    var P = new Uint8Array(32);
                    F(P, e, u, Y);
                    for (var R = new Uint8Array(8), z = 0; z < 8; z++) R[z] = e[z + 16];
                    return V(t, n, i, R, P)
                }

                function q(t, n, i, e, u, P, R) {
                    var z = new Uint8Array(32);
                    F(z, P, R, Y);
                    for (var $ = new Uint8Array(8), oe = 0; oe < 8; oe++) $[oe] = P[oe + 16];
                    return re(t, n, i, e, u, $, z)
                }
                var S = function(t) {
                    var n, i, e, u, P, R, z, $;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, this.r[0] = 8191 & (n = 255 & t[0] | (255 & t[1]) << 8), this.r[1] = 8191 & (n >>> 13 | (i = 255 & t[2] | (255 & t[3]) << 8) << 3), this.r[2] = 7939 & (i >>> 10 | (e = 255 & t[4] | (255 & t[5]) << 8) << 6), this.r[3] = 8191 & (e >>> 7 | (u = 255 & t[6] | (255 & t[7]) << 8) << 9), this.r[4] = 255 & (u >>> 4 | (P = 255 & t[8] | (255 & t[9]) << 8) << 12), this.r[5] = P >>> 1 & 8190, this.r[6] = 8191 & (P >>> 14 | (R = 255 & t[10] | (255 & t[11]) << 8) << 2), this.r[7] = 8065 & (R >>> 11 | (z = 255 & t[12] | (255 & t[13]) << 8) << 5), this.r[8] = 8191 & (z >>> 8 | ($ = 255 & t[14] | (255 & t[15]) << 8) << 8), this.r[9] = $ >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
                };

                function r(t, n, i, e, u, P) {
                    var R = new S(P);
                    return R.update(i, e, u), R.finish(t, n), 0
                }

                function a(t, n, i, e, u, P) {
                    var R = new Uint8Array(16);
                    return r(R, 0, i, e, u, P), s(t, n, R, 0)
                }

                function v(t, n, i, e, u) {
                    var P;
                    if (i < 32) return -1;
                    for (q(t, 0, n, 0, i, e, u), r(t, 16, t, 32, i - 32, t), P = 0; P < 16; P++) t[P] = 0;
                    return 0
                }

                function E(t, n, i, e, u) {
                    var P, R = new Uint8Array(32);
                    if (i < 32 || (X(R, 0, 32, e, u), 0 !== a(n, 16, n, 32, i - 32, R))) return -1;
                    for (q(t, 0, n, 0, i, e, u), P = 0; P < 32; P++) t[P] = 0;
                    return 0
                }

                function T(t, n) {
                    var i;
                    for (i = 0; i < 16; i++) t[i] = 0 | n[i]
                }

                function D(t) {
                    var n, i, e = 1;
                    for (n = 0; n < 16; n++) i = t[n] + e + 65535, e = Math.floor(i / 65536), t[n] = i - 65536 * e;
                    t[0] += e - 1 + 37 * (e - 1)
                }

                function j(t, n, i) {
                    for (var e, u = ~(i - 1), P = 0; P < 16; P++) t[P] ^= e = u & (t[P] ^ n[P]), n[P] ^= e
                }

                function M(t, n) {
                    var i, e, u, P = l(),
                        R = l();
                    for (i = 0; i < 16; i++) R[i] = n[i];
                    for (D(R), D(R), D(R), e = 0; e < 2; e++) {
                        for (P[0] = R[0] - 65517, i = 1; i < 15; i++) P[i] = R[i] - 65535 - (P[i - 1] >> 16 & 1), P[i - 1] &= 65535;
                        P[15] = R[15] - 32767 - (P[14] >> 16 & 1), u = P[15] >> 16 & 1, P[14] &= 65535, j(R, P, 1 - u)
                    }
                    for (i = 0; i < 16; i++) t[2 * i] = 255 & R[i], t[2 * i + 1] = R[i] >> 8
                }

                function o(t, n) {
                    var i = new Uint8Array(32),
                        e = new Uint8Array(32);
                    return M(i, t), M(e, n), c(i, 0, e, 0)
                }

                function I(t) {
                    var n = new Uint8Array(32);
                    return M(n, t), 1 & n[0]
                }

                function ge(t, n) {
                    var i;
                    for (i = 0; i < 16; i++) t[i] = n[2 * i] + (n[2 * i + 1] << 8);
                    t[15] &= 32767
                }

                function de(t, n, i) {
                    for (var e = 0; e < 16; e++) t[e] = n[e] + i[e]
                }

                function ce(t, n, i) {
                    for (var e = 0; e < 16; e++) t[e] = n[e] - i[e]
                }

                function se(t, n, i) {
                    var e, u, P = 0,
                        R = 0,
                        z = 0,
                        $ = 0,
                        oe = 0,
                        ie = 0,
                        Fe = 0,
                        he = 0,
                        be = 0,
                        Me = 0,
                        Ie = 0,
                        Te = 0,
                        we = 0,
                        Ae = 0,
                        Ee = 0,
                        me = 0,
                        ve = 0,
                        ue = 0,
                        le = 0,
                        pe = 0,
                        ae = 0,
                        W = 0,
                        J = 0,
                        te = 0,
                        Q = 0,
                        ee = 0,
                        ne = 0,
                        Pe = 0,
                        Oe = 0,
                        Ce = 0,
                        ke = 0,
                        b = i[0],
                        fe = i[1],
                        ye = i[2],
                        _e = i[3],
                        xe = i[4],
                        Se = i[5],
                        Ne = i[6],
                        ht = i[7],
                        He = i[8],
                        lt = i[9],
                        mt = i[10],
                        pt = i[11],
                        vt = i[12],
                        yt = i[13],
                        xt = i[14],
                        bt = i[15];
                    P += (e = n[0]) * b, R += e * fe, z += e * ye, $ += e * _e, oe += e * xe, ie += e * Se, Fe += e * Ne, he += e * ht, be += e * He, Me += e * lt, Ie += e * mt, Te += e * pt, we += e * vt, Ae += e * yt, Ee += e * xt, me += e * bt, R += (e = n[1]) * b, z += e * fe, $ += e * ye, oe += e * _e, ie += e * xe, Fe += e * Se, he += e * Ne, be += e * ht, Me += e * He, Ie += e * lt, Te += e * mt, we += e * pt, Ae += e * vt, Ee += e * yt, me += e * xt, ve += e * bt, z += (e = n[2]) * b, $ += e * fe, oe += e * ye, ie += e * _e, Fe += e * xe, he += e * Se, be += e * Ne, Me += e * ht, Ie += e * He, Te += e * lt, we += e * mt, Ae += e * pt, Ee += e * vt, me += e * yt, ve += e * xt, ue += e * bt, $ += (e = n[3]) * b, oe += e * fe, ie += e * ye, Fe += e * _e, he += e * xe, be += e * Se, Me += e * Ne, Ie += e * ht, Te += e * He, we += e * lt, Ae += e * mt, Ee += e * pt, me += e * vt, ve += e * yt, ue += e * xt, le += e * bt, oe += (e = n[4]) * b, ie += e * fe, Fe += e * ye, he += e * _e, be += e * xe, Me += e * Se, Ie += e * Ne, Te += e * ht, we += e * He, Ae += e * lt, Ee += e * mt, me += e * pt, ve += e * vt, ue += e * yt, le += e * xt, pe += e * bt, ie += (e = n[5]) * b, Fe += e * fe, he += e * ye, be += e * _e, Me += e * xe, Ie += e * Se, Te += e * Ne, we += e * ht, Ae += e * He, Ee += e * lt, me += e * mt, ve += e * pt, ue += e * vt, le += e * yt, pe += e * xt, ae += e * bt, Fe += (e = n[6]) * b, he += e * fe, be += e * ye, Me += e * _e, Ie += e * xe, Te += e * Se, we += e * Ne, Ae += e * ht, Ee += e * He, me += e * lt, ve += e * mt, ue += e * pt, le += e * vt, pe += e * yt, ae += e * xt, W += e * bt, he += (e = n[7]) * b, be += e * fe, Me += e * ye, Ie += e * _e, Te += e * xe, we += e * Se, Ae += e * Ne, Ee += e * ht, me += e * He, ve += e * lt, ue += e * mt, le += e * pt, pe += e * vt, ae += e * yt, W += e * xt, J += e * bt, be += (e = n[8]) * b, Me += e * fe, Ie += e * ye, Te += e * _e, we += e * xe, Ae += e * Se, Ee += e * Ne, me += e * ht, ve += e * He, ue += e * lt, le += e * mt, pe += e * pt, ae += e * vt, W += e * yt, J += e * xt, te += e * bt, Me += (e = n[9]) * b, Ie += e * fe, Te += e * ye, we += e * _e, Ae += e * xe, Ee += e * Se, me += e * Ne, ve += e * ht, ue += e * He, le += e * lt, pe += e * mt, ae += e * pt, W += e * vt, J += e * yt, te += e * xt, Q += e * bt, Ie += (e = n[10]) * b, Te += e * fe, we += e * ye, Ae += e * _e, Ee += e * xe, me += e * Se, ve += e * Ne, ue += e * ht, le += e * He, pe += e * lt, ae += e * mt, W += e * pt, J += e * vt, te += e * yt, Q += e * xt, ee += e * bt, Te += (e = n[11]) * b, we += e * fe, Ae += e * ye, Ee += e * _e, me += e * xe, ve += e * Se, ue += e * Ne, le += e * ht, pe += e * He, ae += e * lt, W += e * mt, J += e * pt, te += e * vt, Q += e * yt, ee += e * xt, ne += e * bt, we += (e = n[12]) * b, Ae += e * fe, Ee += e * ye, me += e * _e, ve += e * xe, ue += e * Se, le += e * Ne, pe += e * ht, ae += e * He, W += e * lt, J += e * mt, te += e * pt, Q += e * vt, ee += e * yt, ne += e * xt, Pe += e * bt, Ae += (e = n[13]) * b, Ee += e * fe, me += e * ye, ve += e * _e, ue += e * xe, le += e * Se, pe += e * Ne, ae += e * ht, W += e * He, J += e * lt, te += e * mt, Q += e * pt, ee += e * vt, ne += e * yt, Pe += e * xt, Oe += e * bt, Ee += (e = n[14]) * b, me += e * fe, ve += e * ye, ue += e * _e, le += e * xe, pe += e * Se, ae += e * Ne, W += e * ht, J += e * He, te += e * lt, Q += e * mt, ee += e * pt, ne += e * vt, Pe += e * yt, Oe += e * xt, Ce += e * bt, me += (e = n[15]) * b, R += 38 * (ue += e * ye), z += 38 * (le += e * _e), $ += 38 * (pe += e * xe), oe += 38 * (ae += e * Se), ie += 38 * (W += e * Ne), Fe += 38 * (J += e * ht), he += 38 * (te += e * He), be += 38 * (Q += e * lt), Me += 38 * (ee += e * mt), Ie += 38 * (ne += e * pt), Te += 38 * (Pe += e * vt), we += 38 * (Oe += e * yt), Ae += 38 * (Ce += e * xt), Ee += 38 * (ke += e * bt), P = (e = (P += 38 * (ve += e * fe)) + (u = 1) + 65535) - 65536 * (u = Math.floor(e / 65536)), R = (e = R + u + 65535) - 65536 * (u = Math.floor(e / 65536)), z = (e = z + u + 65535) - 65536 * (u = Math.floor(e / 65536)), $ = (e = $ + u + 65535) - 65536 * (u = Math.floor(e / 65536)), oe = (e = oe + u + 65535) - 65536 * (u = Math.floor(e / 65536)), ie = (e = ie + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Fe = (e = Fe + u + 65535) - 65536 * (u = Math.floor(e / 65536)), he = (e = he + u + 65535) - 65536 * (u = Math.floor(e / 65536)), be = (e = be + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Me = (e = Me + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ie = (e = Ie + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Te = (e = Te + u + 65535) - 65536 * (u = Math.floor(e / 65536)), we = (e = we + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ae = (e = Ae + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ee = (e = Ee + u + 65535) - 65536 * (u = Math.floor(e / 65536)), me = (e = me + u + 65535) - 65536 * (u = Math.floor(e / 65536)), P = (e = (P += u - 1 + 37 * (u - 1)) + (u = 1) + 65535) - 65536 * (u = Math.floor(e / 65536)), R = (e = R + u + 65535) - 65536 * (u = Math.floor(e / 65536)), z = (e = z + u + 65535) - 65536 * (u = Math.floor(e / 65536)), $ = (e = $ + u + 65535) - 65536 * (u = Math.floor(e / 65536)), oe = (e = oe + u + 65535) - 65536 * (u = Math.floor(e / 65536)), ie = (e = ie + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Fe = (e = Fe + u + 65535) - 65536 * (u = Math.floor(e / 65536)), he = (e = he + u + 65535) - 65536 * (u = Math.floor(e / 65536)), be = (e = be + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Me = (e = Me + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ie = (e = Ie + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Te = (e = Te + u + 65535) - 65536 * (u = Math.floor(e / 65536)), we = (e = we + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ae = (e = Ae + u + 65535) - 65536 * (u = Math.floor(e / 65536)), Ee = (e = Ee + u + 65535) - 65536 * (u = Math.floor(e / 65536)), me = (e = me + u + 65535) - 65536 * (u = Math.floor(e / 65536)), t[0] = P += u - 1 + 37 * (u - 1), t[1] = R, t[2] = z, t[3] = $, t[4] = oe, t[5] = ie, t[6] = Fe, t[7] = he, t[8] = be, t[9] = Me, t[10] = Ie, t[11] = Te, t[12] = we, t[13] = Ae, t[14] = Ee, t[15] = me
                }

                function Be(t, n) {
                    se(t, n, n)
                }

                function Ge(t, n) {
                    var e, i = l();
                    for (e = 0; e < 16; e++) i[e] = n[e];
                    for (e = 253; e >= 0; e--) Be(i, i), 2 !== e && 4 !== e && se(i, i, n);
                    for (e = 0; e < 16; e++) t[e] = i[e]
                }

                function wt(t, n) {
                    var e, i = l();
                    for (e = 0; e < 16; e++) i[e] = n[e];
                    for (e = 250; e >= 0; e--) Be(i, i), 1 !== e && se(i, i, n);
                    for (e = 0; e < 16; e++) t[e] = i[e]
                }

                function Re(t, n, i) {
                    var P, R, e = new Uint8Array(32),
                        u = new Float64Array(80),
                        z = l(),
                        $ = l(),
                        oe = l(),
                        ie = l(),
                        Fe = l(),
                        he = l();
                    for (R = 0; R < 31; R++) e[R] = n[R];
                    for (e[31] = 127 & n[31] | 64, e[0] &= 248, ge(u, i), R = 0; R < 16; R++) $[R] = u[R], ie[R] = z[R] = oe[R] = 0;
                    for (z[0] = ie[0] = 1, R = 254; R >= 0; --R) j(z, $, P = e[R >>> 3] >>> (7 & R) & 1), j(oe, ie, P), de(Fe, z, oe), ce(z, z, oe), de(oe, $, ie), ce($, $, ie), Be(ie, Fe), Be(he, z), se(z, oe, z), se(oe, $, Fe), de(Fe, z, oe), ce(z, z, oe), Be($, z), ce(oe, ie, he), se(z, oe, Z), de(z, z, ie), se(oe, oe, z), se(z, ie, he), se(ie, $, u), Be($, Fe), j(z, $, P), j(oe, ie, P);
                    for (R = 0; R < 16; R++) u[R + 16] = z[R], u[R + 32] = oe[R], u[R + 48] = $[R], u[R + 64] = ie[R];
                    var be = u.subarray(32),
                        Me = u.subarray(16);
                    return Ge(be, be), se(Me, Me, be), M(t, Me), 0
                }

                function Le(t, n) {
                    return Re(t, n, h)
                }

                function St(t, n) {
                    return A(n, 32), Le(t, n)
                }

                function Je(t, n, i) {
                    var e = new Uint8Array(32);
                    return Re(e, i, n), F(t, G, e, Y)
                }
                S.prototype.blocks = function(t, n, i) {
                    for (var u, P, R, z, $, oe, ie, Fe, he, be, Me, Ie, Te, we, Ae, Ee, me, ve, ue, e = this.fin ? 0 : 2048, le = this.h[0], pe = this.h[1], ae = this.h[2], W = this.h[3], J = this.h[4], te = this.h[5], Q = this.h[6], ee = this.h[7], ne = this.h[8], Pe = this.h[9], Oe = this.r[0], Ce = this.r[1], ke = this.r[2], b = this.r[3], fe = this.r[4], ye = this.r[5], _e = this.r[6], xe = this.r[7], Se = this.r[8], Ne = this.r[9]; i >= 16;) be = he = 0, be += (le += 8191 & (u = 255 & t[n + 0] | (255 & t[n + 1]) << 8)) * Oe, be += (pe += 8191 & (u >>> 13 | (P = 255 & t[n + 2] | (255 & t[n + 3]) << 8) << 3)) * (5 * Ne), be += (ae += 8191 & (P >>> 10 | (R = 255 & t[n + 4] | (255 & t[n + 5]) << 8) << 6)) * (5 * Se), be += (W += 8191 & (R >>> 7 | (z = 255 & t[n + 6] | (255 & t[n + 7]) << 8) << 9)) * (5 * xe), he = (be += (J += 8191 & (z >>> 4 | ($ = 255 & t[n + 8] | (255 & t[n + 9]) << 8) << 12)) * (5 * _e)) >>> 13, be &= 8191, be += (te += $ >>> 1 & 8191) * (5 * ye), be += (Q += 8191 & ($ >>> 14 | (oe = 255 & t[n + 10] | (255 & t[n + 11]) << 8) << 2)) * (5 * fe), be += (ee += 8191 & (oe >>> 11 | (ie = 255 & t[n + 12] | (255 & t[n + 13]) << 8) << 5)) * (5 * b), be += (ne += 8191 & (ie >>> 8 | (Fe = 255 & t[n + 14] | (255 & t[n + 15]) << 8) << 8)) * (5 * ke), Me = he += (be += (Pe += Fe >>> 5 | e) * (5 * Ce)) >>> 13, Me += le * Ce, Me += pe * Oe, Me += ae * (5 * Ne), Me += W * (5 * Se), he = (Me += J * (5 * xe)) >>> 13, Me &= 8191, Me += te * (5 * _e), Me += Q * (5 * ye), Me += ee * (5 * fe), Me += ne * (5 * b), he += (Me += Pe * (5 * ke)) >>> 13, Me &= 8191, Ie = he, Ie += le * ke, Ie += pe * Ce, Ie += ae * Oe, Ie += W * (5 * Ne), he = (Ie += J * (5 * Se)) >>> 13, Ie &= 8191, Ie += te * (5 * xe), Ie += Q * (5 * _e), Ie += ee * (5 * ye), Ie += ne * (5 * fe), Te = he += (Ie += Pe * (5 * b)) >>> 13, Te += le * b, Te += pe * ke, Te += ae * Ce, Te += W * Oe, he = (Te += J * (5 * Ne)) >>> 13, Te &= 8191, Te += te * (5 * Se), Te += Q * (5 * xe), Te += ee * (5 * _e), Te += ne * (5 * ye), we = he += (Te += Pe * (5 * fe)) >>> 13, we += le * fe, we += pe * b, we += ae * ke, we += W * Ce, he = (we += J * Oe) >>> 13, we &= 8191, we += te * (5 * Ne), we += Q * (5 * Se), we += ee * (5 * xe), we += ne * (5 * _e), Ae = he += (we += Pe * (5 * ye)) >>> 13, Ae += le * ye, Ae += pe * fe, Ae += ae * b, Ae += W * ke, he = (Ae += J * Ce) >>> 13, Ae &= 8191, Ae += te * Oe, Ae += Q * (5 * Ne), Ae += ee * (5 * Se), Ae += ne * (5 * xe), Ee = he += (Ae += Pe * (5 * _e)) >>> 13, Ee += le * _e, Ee += pe * ye, Ee += ae * fe, Ee += W * b, he = (Ee += J * ke) >>> 13, Ee &= 8191, Ee += te * Ce, Ee += Q * Oe, Ee += ee * (5 * Ne), Ee += ne * (5 * Se), me = he += (Ee += Pe * (5 * xe)) >>> 13, me += le * xe, me += pe * _e, me += ae * ye, me += W * fe, he = (me += J * b) >>> 13, me &= 8191, me += te * ke, me += Q * Ce, me += ee * Oe, me += ne * (5 * Ne), ve = he += (me += Pe * (5 * Se)) >>> 13, ve += le * Se, ve += pe * xe, ve += ae * _e, ve += W * ye, he = (ve += J * fe) >>> 13, ve &= 8191, ve += te * b, ve += Q * ke, ve += ee * Ce, ve += ne * Oe, ue = he += (ve += Pe * (5 * Ne)) >>> 13, ue += le * Ne, ue += pe * Se, ue += ae * xe, ue += W * _e, he = (ue += J * ye) >>> 13, ue &= 8191, ue += te * fe, ue += Q * b, ue += ee * ke, ue += ne * Ce, le = be = 8191 & (he = (he = ((he += (ue += Pe * Oe) >>> 13) << 2) + he | 0) + (be &= 8191) | 0), pe = Me += he >>>= 13, ae = Ie &= 8191, W = Te &= 8191, J = we &= 8191, te = Ae &= 8191, Q = Ee &= 8191, ee = me &= 8191, ne = ve &= 8191, Pe = ue &= 8191, n += 16, i -= 16;
                    this.h[0] = le, this.h[1] = pe, this.h[2] = ae, this.h[3] = W, this.h[4] = J, this.h[5] = te, this.h[6] = Q, this.h[7] = ee, this.h[8] = ne, this.h[9] = Pe
                }, S.prototype.finish = function(t, n) {
                    var e, u, P, R, i = new Uint16Array(10);
                    if (this.leftover) {
                        for (R = this.leftover, this.buffer[R++] = 1; R < 16; R++) this.buffer[R] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (e = this.h[1] >>> 13, this.h[1] &= 8191, R = 2; R < 10; R++) this.h[R] += e, e = this.h[R] >>> 13, this.h[R] &= 8191;
                    for (this.h[0] += 5 * e, e = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += e, e = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += e, i[0] = this.h[0] + 5, e = i[0] >>> 13, i[0] &= 8191, R = 1; R < 10; R++) i[R] = this.h[R] + e, e = i[R] >>> 13, i[R] &= 8191;
                    for (i[9] -= 8192, u = (1 ^ e) - 1, R = 0; R < 10; R++) i[R] &= u;
                    for (u = ~u, R = 0; R < 10; R++) this.h[R] = this.h[R] & u | i[R];
                    for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), this.h[0] = 65535 & (P = this.h[0] + this.pad[0]), R = 1; R < 8; R++) this.h[R] = 65535 & (P = (this.h[R] + this.pad[R] | 0) + (P >>> 16) | 0);
                    t[n + 0] = this.h[0] >>> 0 & 255, t[n + 1] = this.h[0] >>> 8 & 255, t[n + 2] = this.h[1] >>> 0 & 255, t[n + 3] = this.h[1] >>> 8 & 255, t[n + 4] = this.h[2] >>> 0 & 255, t[n + 5] = this.h[2] >>> 8 & 255, t[n + 6] = this.h[3] >>> 0 & 255, t[n + 7] = this.h[3] >>> 8 & 255, t[n + 8] = this.h[4] >>> 0 & 255, t[n + 9] = this.h[4] >>> 8 & 255, t[n + 10] = this.h[5] >>> 0 & 255, t[n + 11] = this.h[5] >>> 8 & 255, t[n + 12] = this.h[6] >>> 0 & 255, t[n + 13] = this.h[6] >>> 8 & 255, t[n + 14] = this.h[7] >>> 0 & 255, t[n + 15] = this.h[7] >>> 8 & 255
                }, S.prototype.update = function(t, n, i) {
                    var e, u;
                    if (this.leftover) {
                        for ((u = 16 - this.leftover) > i && (u = i), e = 0; e < u; e++) this.buffer[this.leftover + e] = t[n + e];
                        if (i -= u, n += u, this.leftover += u, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (i >= 16 && (this.blocks(t, n, u = i - i % 16), n += u, i -= u), i) {
                        for (e = 0; e < i; e++) this.buffer[this.leftover + e] = t[n + e];
                        this.leftover += i
                    }
                };
                var nt = v,
                    kt = E,
                    Ct = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function ft(t, n, i, e) {
                    for (var z, $, ie, Fe, he, be, Ie, Te, Ae, Ee, me, ve, ue, le, pe, ae, W, J, te, Q, ee, ne, u = new Int32Array(16), P = new Int32Array(16), Pe = t[0], Oe = t[1], Ce = t[2], ke = t[3], b = t[4], fe = t[5], ye = t[6], _e = t[7], xe = n[0], Se = n[1], Ne = n[2], ht = n[3], He = n[4], lt = n[5], mt = n[6], pt = n[7], vt = 0; e >= 128;) {
                        for (pe = 0; pe < 16; pe++) u[pe] = i[(ae = 8 * pe + vt) + 0] << 24 | i[ae + 1] << 16 | i[ae + 2] << 8 | i[ae + 3], P[pe] = i[ae + 4] << 24 | i[ae + 5] << 16 | i[ae + 6] << 8 | i[ae + 7];
                        for (pe = 0; pe < 80; pe++)
                            if (z = Oe, $ = Ce, ie = b, Fe = fe, he = ye, Ie = Se, Te = Ne, Ae = He, Ee = lt, me = mt, te = 65535 & (J = pt), Q = J >>> 16, ee = 65535 & (W = _e), ne = W >>> 16, te += 65535 & (J = (He >>> 14 | b << 18) ^ (He >>> 18 | b << 14) ^ (b >>> 9 | He << 23)), Q += J >>> 16, ee += 65535 & (W = (b >>> 14 | He << 18) ^ (b >>> 18 | He << 14) ^ (He >>> 9 | b << 23)), ne += W >>> 16, te += 65535 & (J = He & lt ^ ~He & mt), Q += J >>> 16, ee += 65535 & (W = b & fe ^ ~b & ye), ne += W >>> 16, te += 65535 & (J = Ct[2 * pe + 1]), Q += J >>> 16, ee += 65535 & (W = Ct[2 * pe]), ne += W >>> 16, Q += (J = P[pe % 16]) >>> 16, ee += 65535 & (W = u[pe % 16]), ne += W >>> 16, ee += (Q += (te += 65535 & J) >>> 16) >>> 16, te = 65535 & (J = le = 65535 & te | Q << 16), Q = J >>> 16, ee = 65535 & (W = ue = 65535 & ee | (ne += ee >>> 16) << 16), ne = W >>> 16, te += 65535 & (J = (xe >>> 28 | Pe << 4) ^ (Pe >>> 2 | xe << 30) ^ (Pe >>> 7 | xe << 25)), Q += J >>> 16, ee += 65535 & (W = (Pe >>> 28 | xe << 4) ^ (xe >>> 2 | Pe << 30) ^ (xe >>> 7 | Pe << 25)), ne += W >>> 16, Q += (J = xe & Se ^ xe & Ne ^ Se & Ne) >>> 16, ee += 65535 & (W = Pe & Oe ^ Pe & Ce ^ Oe & Ce), ne += W >>> 16, be = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, ve = 65535 & te | Q << 16, te = 65535 & (J = ht), Q = J >>> 16, ee = 65535 & (W = ke), ne = W >>> 16, Q += (J = le) >>> 16, ee += 65535 & (W = ue), ne += W >>> 16, Oe = Pe, Ce = z, ke = $, b = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, fe = ie, ye = Fe, _e = he, Pe = be, Se = xe, Ne = Ie, ht = Te, He = 65535 & te | Q << 16, lt = Ae, mt = Ee, pt = me, xe = ve, pe % 16 == 15)
                                for (ae = 0; ae < 16; ae++) te = 65535 & (J = P[ae]), Q = J >>> 16, ee = 65535 & (W = u[ae]), ne = W >>> 16, te += 65535 & (J = P[(ae + 9) % 16]), Q += J >>> 16, ee += 65535 & (W = u[(ae + 9) % 16]), ne += W >>> 16, te += 65535 & (J = ((le = P[(ae + 1) % 16]) >>> 1 | (ue = u[(ae + 1) % 16]) << 31) ^ (le >>> 8 | ue << 24) ^ (le >>> 7 | ue << 25)), Q += J >>> 16, ee += 65535 & (W = (ue >>> 1 | le << 31) ^ (ue >>> 8 | le << 24) ^ ue >>> 7), ne += W >>> 16, Q += (J = ((le = P[(ae + 14) % 16]) >>> 19 | (ue = u[(ae + 14) % 16]) << 13) ^ (ue >>> 29 | le << 3) ^ (le >>> 6 | ue << 26)) >>> 16, ee += 65535 & (W = (ue >>> 19 | le << 13) ^ (le >>> 29 | ue << 3) ^ ue >>> 6), ne += W >>> 16, u[ae] = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, P[ae] = 65535 & te | Q << 16;
                        te = 65535 & (J = xe), Q = J >>> 16, ee = 65535 & (W = Pe), ne = W >>> 16, Q += (J = n[0]) >>> 16, ee += 65535 & (W = t[0]), ne += W >>> 16, t[0] = Pe = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[0] = xe = 65535 & te | Q << 16, te = 65535 & (J = Se), Q = J >>> 16, ee = 65535 & (W = Oe), ne = W >>> 16, Q += (J = n[1]) >>> 16, ee += 65535 & (W = t[1]), ne += W >>> 16, t[1] = Oe = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[1] = Se = 65535 & te | Q << 16, te = 65535 & (J = Ne), Q = J >>> 16, ee = 65535 & (W = Ce), ne = W >>> 16, Q += (J = n[2]) >>> 16, ee += 65535 & (W = t[2]), ne += W >>> 16, t[2] = Ce = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[2] = Ne = 65535 & te | Q << 16, te = 65535 & (J = ht), Q = J >>> 16, ee = 65535 & (W = ke), ne = W >>> 16, Q += (J = n[3]) >>> 16, ee += 65535 & (W = t[3]), ne += W >>> 16, t[3] = ke = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[3] = ht = 65535 & te | Q << 16, te = 65535 & (J = He), Q = J >>> 16, ee = 65535 & (W = b), ne = W >>> 16, Q += (J = n[4]) >>> 16, ee += 65535 & (W = t[4]), ne += W >>> 16, t[4] = b = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[4] = He = 65535 & te | Q << 16, te = 65535 & (J = lt), Q = J >>> 16, ee = 65535 & (W = fe), ne = W >>> 16, Q += (J = n[5]) >>> 16, ee += 65535 & (W = t[5]), ne += W >>> 16, t[5] = fe = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[5] = lt = 65535 & te | Q << 16, te = 65535 & (J = mt), Q = J >>> 16, ee = 65535 & (W = ye), ne = W >>> 16, Q += (J = n[6]) >>> 16, ee += 65535 & (W = t[6]), ne += W >>> 16, t[6] = ye = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[6] = mt = 65535 & te | Q << 16, te = 65535 & (J = pt), Q = J >>> 16, ee = 65535 & (W = _e), ne = W >>> 16, Q += (J = n[7]) >>> 16, ee += 65535 & (W = t[7]), ne += W >>> 16, t[7] = _e = 65535 & (ee += (Q += (te += 65535 & J) >>> 16) >>> 16) | (ne += ee >>> 16) << 16, n[7] = pt = 65535 & te | Q << 16, vt += 128, e -= 128
                    }
                    return e
                }

                function je(t, n, i) {
                    var R, e = new Int32Array(8),
                        u = new Int32Array(8),
                        P = new Uint8Array(256),
                        z = i;
                    for (e[0] = 1779033703, e[1] = 3144134277, e[2] = 1013904242, e[3] = 2773480762, e[4] = 1359893119, e[5] = 2600822924, e[6] = 528734635, e[7] = 1541459225, u[0] = 4089235720, u[1] = 2227873595, u[2] = 4271175723, u[3] = 1595750129, u[4] = 2917565137, u[5] = 725511199, u[6] = 4215389547, u[7] = 327033209, ft(e, u, n, i), i %= 128, R = 0; R < i; R++) P[R] = n[z - i + R];
                    for (P[i] = 128, P[(i = 256 - 128 * (i < 112 ? 1 : 0)) - 9] = 0, y(P, i - 8, z / 536870912 | 0, z << 3), ft(e, u, P, i), R = 0; R < 8; R++) y(t, 8 * R, e[R], u[R]);
                    return 0
                }

                function Mt(t, n) {
                    var i = l(),
                        e = l(),
                        u = l(),
                        P = l(),
                        R = l(),
                        z = l(),
                        $ = l(),
                        oe = l(),
                        ie = l();
                    ce(i, t[1], t[0]), ce(ie, n[1], n[0]), se(i, i, ie), de(e, t[0], t[1]), de(ie, n[0], n[1]), se(e, e, ie), se(u, t[3], n[3]), se(u, u, w), se(P, t[2], n[2]), de(P, P, P), ce(R, e, i), ce(z, P, u), de($, P, u), de(oe, e, i), se(t[0], R, z), se(t[1], oe, $), se(t[2], $, z), se(t[3], R, oe)
                }

                function $e(t, n, i) {
                    var e;
                    for (e = 0; e < 4; e++) j(t[e], n[e], i)
                }

                function qe(t, n) {
                    var i = l(),
                        e = l(),
                        u = l();
                    Ge(u, n[2]), se(i, n[0], u), se(e, n[1], u), M(t, e), t[31] ^= I(i) << 7
                }

                function At(t, n, i) {
                    var e, u;
                    for (T(t[0], H), T(t[1], B), T(t[2], B), T(t[3], H), u = 255; u >= 0; --u) $e(t, n, e = i[u / 8 | 0] >> (7 & u) & 1), Mt(n, t), Mt(t, t), $e(t, n, e)
                }

                function De(t, n) {
                    var i = [l(), l(), l(), l()];
                    T(i[0], O), T(i[1], g), T(i[2], B), se(i[3], O, g), At(t, i, n)
                }

                function ze(t, n, i) {
                    var P, e = new Uint8Array(64),
                        u = [l(), l(), l(), l()];
                    for (i || A(n, 32), je(e, n, 32), e[0] &= 248, e[31] &= 127, e[31] |= 64, De(u, e), qe(t, u), P = 0; P < 32; P++) n[P + 32] = t[P];
                    return 0
                }
                var t, It = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function We(t, n) {
                    var i, e, u, P;
                    for (e = 63; e >= 32; --e) {
                        for (i = 0, u = e - 32, P = e - 12; u < P; ++u) n[u] += i - 16 * n[e] * It[u - (e - 32)], i = Math.floor((n[u] + 128) / 256), n[u] -= 256 * i;
                        n[u] += i, n[e] = 0
                    }
                    for (i = 0, u = 0; u < 32; u++) n[u] += i - (n[31] >> 4) * It[u], i = n[u] >> 8, n[u] &= 255;
                    for (u = 0; u < 32; u++) n[u] -= i * It[u];
                    for (e = 0; e < 32; e++) n[e + 1] += n[e] >> 8, t[e] = 255 & n[e]
                }

                function it(t) {
                    var i, n = new Float64Array(64);
                    for (i = 0; i < 64; i++) n[i] = t[i];
                    for (i = 0; i < 64; i++) t[i] = 0;
                    We(t, n)
                }

                function Tt(t, n, i, e) {
                    var z, $, u = new Uint8Array(64),
                        P = new Uint8Array(64),
                        R = new Uint8Array(64),
                        oe = new Float64Array(64),
                        ie = [l(), l(), l(), l()];
                    je(u, e, 32), u[0] &= 248, u[31] &= 127, u[31] |= 64;
                    var Fe = i + 64;
                    for (z = 0; z < i; z++) t[64 + z] = n[z];
                    for (z = 0; z < 32; z++) t[32 + z] = u[32 + z];
                    for (je(R, t.subarray(32), i + 32), it(R), De(ie, R), qe(t, ie), z = 32; z < 64; z++) t[z] = e[z];
                    for (je(P, t, i + 64), it(P), z = 0; z < 64; z++) oe[z] = 0;
                    for (z = 0; z < 32; z++) oe[z] = R[z];
                    for (z = 0; z < 32; z++)
                        for ($ = 0; $ < 32; $++) oe[z + $] += P[z] * u[$];
                    return We(t.subarray(32), oe), Fe
                }

                function et(t, n, i, e) {
                    var u, P = new Uint8Array(32),
                        R = new Uint8Array(64),
                        z = [l(), l(), l(), l()],
                        $ = [l(), l(), l(), l()];
                    if (i < 64 || function ot(t, n) {
                            var i = l(),
                                e = l(),
                                u = l(),
                                P = l(),
                                R = l(),
                                z = l(),
                                $ = l();
                            return T(t[2], B), ge(t[1], n), Be(u, t[1]), se(P, u, U), ce(u, u, t[2]), de(P, t[2], P), Be(R, P), Be(z, R), se($, z, R), se(i, $, u), se(i, i, P), wt(i, i), se(i, i, u), se(i, i, P), se(i, i, P), se(t[0], i, P), Be(e, t[0]), se(e, e, P), o(e, u) && se(t[0], t[0], d), Be(e, t[0]), se(e, e, P), o(e, u) ? -1 : (I(t[0]) === n[31] >> 7 && ce(t[0], H, t[0]), se(t[3], t[0], t[1]), 0)
                        }($, e)) return -1;
                    for (u = 0; u < i; u++) t[u] = n[u];
                    for (u = 0; u < 32; u++) t[u + 32] = e[u];
                    if (je(R, t, i), it(R), At(z, $, R), De($, n.subarray(32)), Mt(z, $), qe(P, z), i -= 64, c(n, 0, P, 0)) {
                        for (u = 0; u < i; u++) t[u] = 0;
                        return -1
                    }
                    for (u = 0; u < i; u++) t[u] = n[u + 64];
                    return i
                }

                function at(t, n) {
                    if (32 !== t.length) throw new Error("bad key size");
                    if (24 !== n.length) throw new Error("bad nonce size")
                }

                function N() {
                    for (var t = 0; t < arguments.length; t++)
                        if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
                }

                function x(t) {
                    for (var n = 0; n < t.length; n++) t[n] = 0
                }
                p.lowlevel = {
                    crypto_core_hsalsa20: F,
                    crypto_stream_xor: q,
                    crypto_stream: X,
                    crypto_stream_salsa20_xor: re,
                    crypto_stream_salsa20: V,
                    crypto_onetimeauth: r,
                    crypto_onetimeauth_verify: a,
                    crypto_verify_16: s,
                    crypto_verify_32: c,
                    crypto_secretbox: v,
                    crypto_secretbox_open: E,
                    crypto_scalarmult: Re,
                    crypto_scalarmult_base: Le,
                    crypto_box_beforenm: Je,
                    crypto_box_afternm: nt,
                    crypto_box: function ct(t, n, i, e, u, P) {
                        var R = new Uint8Array(32);
                        return Je(R, u, P), nt(t, n, i, e, R)
                    },
                    crypto_box_open: function dt(t, n, i, e, u, P) {
                        var R = new Uint8Array(32);
                        return Je(R, u, P), kt(t, n, i, e, R)
                    },
                    crypto_box_keypair: St,
                    crypto_hash: je,
                    crypto_sign: Tt,
                    crypto_sign_keypair: ze,
                    crypto_sign_open: et,
                    crypto_secretbox_KEYBYTES: 32,
                    crypto_secretbox_NONCEBYTES: 24,
                    crypto_secretbox_ZEROBYTES: 32,
                    crypto_secretbox_BOXZEROBYTES: 16,
                    crypto_scalarmult_BYTES: 32,
                    crypto_scalarmult_SCALARBYTES: 32,
                    crypto_box_PUBLICKEYBYTES: 32,
                    crypto_box_SECRETKEYBYTES: 32,
                    crypto_box_BEFORENMBYTES: 32,
                    crypto_box_NONCEBYTES: 24,
                    crypto_box_ZEROBYTES: 32,
                    crypto_box_BOXZEROBYTES: 16,
                    crypto_sign_BYTES: 64,
                    crypto_sign_PUBLICKEYBYTES: 32,
                    crypto_sign_SECRETKEYBYTES: 64,
                    crypto_sign_SEEDBYTES: 32,
                    crypto_hash_BYTES: 64,
                    gf: l,
                    D: U,
                    L: It,
                    pack25519: M,
                    unpack25519: ge,
                    M: se,
                    A: de,
                    S: Be,
                    Z: ce,
                    pow2523: wt,
                    add: Mt,
                    set25519: T,
                    modL: We,
                    scalarmult: At,
                    scalarbase: De
                }, p.randomBytes = function(t) {
                    var n = new Uint8Array(t);
                    return A(n, t), n
                }, p.secretbox = function(t, n, i) {
                    N(t, n, i), at(i, n);
                    for (var e = new Uint8Array(32 + t.length), u = new Uint8Array(e.length), P = 0; P < t.length; P++) e[P + 32] = t[P];
                    return v(u, e, e.length, n, i), u.subarray(16)
                }, p.secretbox.open = function(t, n, i) {
                    N(t, n, i), at(i, n);
                    for (var e = new Uint8Array(16 + t.length), u = new Uint8Array(e.length), P = 0; P < t.length; P++) e[P + 16] = t[P];
                    return e.length < 32 || 0 !== E(u, e, e.length, n, i) ? null : u.subarray(32)
                }, p.secretbox.keyLength = 32, p.secretbox.nonceLength = 24, p.secretbox.overheadLength = 16, p.scalarMult = function(t, n) {
                    if (N(t, n), 32 !== t.length) throw new Error("bad n size");
                    if (32 !== n.length) throw new Error("bad p size");
                    var i = new Uint8Array(32);
                    return Re(i, t, n), i
                }, p.scalarMult.base = function(t) {
                    if (N(t), 32 !== t.length) throw new Error("bad n size");
                    var n = new Uint8Array(32);
                    return Le(n, t), n
                }, p.scalarMult.scalarLength = 32, p.scalarMult.groupElementLength = 32, p.box = function(t, n, i, e) {
                    var u = p.box.before(i, e);
                    return p.secretbox(t, n, u)
                }, p.box.before = function(t, n) {
                    N(t, n),
                        function Ot(t, n) {
                            if (32 !== t.length) throw new Error("bad public key size");
                            if (32 !== n.length) throw new Error("bad secret key size")
                        }(t, n);
                    var i = new Uint8Array(32);
                    return Je(i, t, n), i
                }, p.box.after = p.secretbox, p.box.open = function(t, n, i, e) {
                    var u = p.box.before(i, e);
                    return p.secretbox.open(t, n, u)
                }, p.box.open.after = p.secretbox.open, p.box.keyPair = function() {
                    var t = new Uint8Array(32),
                        n = new Uint8Array(32);
                    return St(t, n), {
                        publicKey: t,
                        secretKey: n
                    }
                }, p.box.keyPair.fromSecretKey = function(t) {
                    if (N(t), 32 !== t.length) throw new Error("bad secret key size");
                    var n = new Uint8Array(32);
                    return Le(n, t), {
                        publicKey: n,
                        secretKey: new Uint8Array(t)
                    }
                }, p.box.publicKeyLength = 32, p.box.secretKeyLength = 32, p.box.sharedKeyLength = 32, p.box.nonceLength = 24, p.box.overheadLength = p.secretbox.overheadLength, p.sign = function(t, n) {
                    if (N(t, n), 64 !== n.length) throw new Error("bad secret key size");
                    var i = new Uint8Array(64 + t.length);
                    return Tt(i, t, t.length, n), i
                }, p.sign.open = function(t, n) {
                    if (N(t, n), 32 !== n.length) throw new Error("bad public key size");
                    var i = new Uint8Array(t.length),
                        e = et(i, t, t.length, n);
                    if (e < 0) return null;
                    for (var u = new Uint8Array(e), P = 0; P < u.length; P++) u[P] = i[P];
                    return u
                }, p.sign.detached = function(t, n) {
                    for (var i = p.sign(t, n), e = new Uint8Array(64), u = 0; u < e.length; u++) e[u] = i[u];
                    return e
                }, p.sign.detached.verify = function(t, n, i) {
                    if (N(t, n, i), 64 !== n.length) throw new Error("bad signature size");
                    if (32 !== i.length) throw new Error("bad public key size");
                    var P, e = new Uint8Array(64 + t.length),
                        u = new Uint8Array(64 + t.length);
                    for (P = 0; P < 64; P++) e[P] = n[P];
                    for (P = 0; P < t.length; P++) e[P + 64] = t[P];
                    return et(u, e, e.length, i) >= 0
                }, p.sign.keyPair = function() {
                    var t = new Uint8Array(32),
                        n = new Uint8Array(64);
                    return ze(t, n), {
                        publicKey: t,
                        secretKey: n
                    }
                }, p.sign.keyPair.fromSecretKey = function(t) {
                    if (N(t), 64 !== t.length) throw new Error("bad secret key size");
                    for (var n = new Uint8Array(32), i = 0; i < n.length; i++) n[i] = t[32 + i];
                    return {
                        publicKey: n,
                        secretKey: new Uint8Array(t)
                    }
                }, p.sign.keyPair.fromSeed = function(t) {
                    if (N(t), 32 !== t.length) throw new Error("bad seed size");
                    for (var n = new Uint8Array(32), i = new Uint8Array(64), e = 0; e < 32; e++) i[e] = t[e];
                    return ze(n, i, !0), {
                        publicKey: n,
                        secretKey: i
                    }
                }, p.sign.publicKeyLength = 32, p.sign.secretKeyLength = 64, p.sign.seedLength = 32, p.sign.signatureLength = 64, p.hash = function(t) {
                    N(t);
                    var n = new Uint8Array(64);
                    return je(n, t, t.length), n
                }, p.hash.hashLength = 64, p.verify = function(t, n) {
                    return N(t, n), 0 !== t.length && 0 !== n.length && t.length === n.length && 0 === f(t, 0, n, 0, t.length)
                }, p.setPRNG = function(t) {
                    A = t
                }, (t = typeof self < "u" ? self.crypto || self.msCrypto : null) && t.getRandomValues ? p.setPRNG(function(i, e) {
                    var u, P = new Uint8Array(e);
                    for (u = 0; u < e; u += 65536) t.getRandomValues(P.subarray(u, u + Math.min(e - u, 65536)));
                    for (u = 0; u < e; u++) i[u] = P[u];
                    x(P)
                }) : (t = C(77903)) && t.randomBytes && p.setPRNG(function(i, e) {
                    var u, P = t.randomBytes(e);
                    for (u = 0; u < e; u++) i[u] = P[u];
                    x(P)
                })
            }(K.exports ? K.exports : self.nacl = self.nacl || {})
        },
        993: () => {},
        47295: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"goerli","chainId":5,"networkId":5,"defaultHardfork":"merge","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xa3f5ab08"},{"name":"homestead","block":0,"forkHash":"0xa3f5ab08"},{"name":"tangerineWhistle","block":0,"forkHash":"0xa3f5ab08"},{"name":"spuriousDragon","block":0,"forkHash":"0xa3f5ab08"},{"name":"byzantium","block":0,"forkHash":"0xa3f5ab08"},{"name":"constantinople","block":0,"forkHash":"0xa3f5ab08"},{"name":"petersburg","block":0,"forkHash":"0xa3f5ab08"},{"name":"istanbul","block":1561651,"forkHash":"0xc25efa5c"},{"name":"berlin","block":4460644,"forkHash":"0x757a1c47"},{"name":"london","block":5062605,"forkHash":"0xb8c6299d"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818","name":"merge","ttd":"10790000","block":7382819,"forkHash":"0xb8c6299d"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"timestamp":"1678832736","forkHash":"0xf9843abf"}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"18.218.250.66","port":30313,"id":"b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949","location":"","comment":"Upstream bootnode 4"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"},{"ip":"51.15.116.226","port":30303,"id":"a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":30303,"id":"807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":40303,"id":"a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd","location":"","comment":"Goerli Initiative bootnode"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]}')
        },
        43323: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"mainnet","chainId":1,"networkId":1,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfc64ec04"},{"name":"homestead","block":1150000,"forkHash":"0x97c2c34c"},{"name":"dao","block":1920000,"forkHash":"0x91d1f948"},{"name":"tangerineWhistle","block":2463000,"forkHash":"0x7a64da13"},{"name":"spuriousDragon","block":2675000,"forkHash":"0x3edd5b10"},{"name":"byzantium","block":4370000,"forkHash":"0xa00bc324"},{"name":"constantinople","block":7280000,"forkHash":"0x668db0af"},{"name":"petersburg","block":7280000,"forkHash":"0x668db0af"},{"name":"istanbul","block":9069000,"forkHash":"0x879d6e30"},{"name":"muirGlacier","block":9200000,"forkHash":"0xe029e991"},{"name":"berlin","block":12244000,"forkHash":"0x0eb440f6"},{"name":"london","block":12965000,"forkHash":"0xb715077d"},{"name":"arrowGlacier","block":13773000,"forkHash":"0x20c327fc"},{"name":"grayGlacier","block":15050000,"forkHash":"0xf0afd0e3"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393","name":"merge","ttd":"58750000000000000000000","block":15537394,"forkHash":"0xf0afd0e3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"timestamp":"1681338455","forkHash":"0xdce96c2d"}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"65.108.70.101","port":30303,"id":"2b252ab6a1d0f971d9722cb839a42cb81db019ba44c08754628ab4a823487071b5695317c8ccd085219c3a03af063495b2f1da8d18218da2d6a82981b45e6ffc","location":"eu-west-1-001","comment":"bootnode-hetzner-hel"},{"ip":"157.90.35.166","port":30303,"id":"4aeb4ab6c14b23e2c4cfdce879c04b0748a20d8e9b59e25ded2a08143e265c6c25936e74cbc8e641e3312ca288673d91f2f93f8e277de3cfa444ecdaaf982052","location":"eu-central-1-001","comment":"bootnode-hetzner-fsn"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]}')
        },
        36987: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"rinkeby","chainId":4,"networkId":4,"defaultHardfork":"london","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x3b8e0691"},{"name":"homestead","block":1,"forkHash":"0x60949295"},{"name":"tangerineWhistle","block":2,"forkHash":"0x8bde40dd"},{"name":"spuriousDragon","block":3,"forkHash":"0xcb3a64bb"},{"name":"byzantium","block":1035301,"forkHash":"0x8d748b57"},{"name":"constantinople","block":3660663,"forkHash":"0xe49cab14"},{"name":"petersburg","block":4321234,"forkHash":"0xafec6b27"},{"name":"istanbul","block":5435345,"forkHash":"0xcbdb8838"},{"name":"berlin","block":8290928,"forkHash":"0x6910c8bd"},{"name":"london","block":8897988,"forkHash":"0x8e29f2f3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]}')
        },
        52823: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"ropsten","chainId":3,"networkId":3,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x30c7ddbc"},{"name":"homestead","block":0,"forkHash":"0x30c7ddbc"},{"name":"tangerineWhistle","block":0,"forkHash":"0x30c7ddbc"},{"name":"spuriousDragon","block":10,"forkHash":"0x63760190"},{"name":"byzantium","block":1700000,"forkHash":"0x3ea159c7"},{"name":"constantinople","block":4230000,"forkHash":"0x97b544f3"},{"name":"petersburg","block":4939394,"forkHash":"0xd6e2149b"},{"name":"istanbul","block":6485846,"forkHash":"0x4bc66396"},{"name":"muirGlacier","block":7117117,"forkHash":"0x6727ef90"},{"name":"berlin","block":9812189,"forkHash":"0xa157d377"},{"name":"london","block":10499401,"forkHash":"0x7119b6b3"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge","name":"merge","ttd":"50000000000000000","block":null,"forkHash":"0x7119b6b3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]}')
        },
        75810: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"sepolia","chainId":11155111,"networkId":11155111,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network to replace Ropsten","url":"https://github.com/ethereum/go-ethereum/pull/23730","genesis":{"timestamp":"0x6159af19","gasLimit":30000000,"difficulty":131072,"nonce":"0x0000000000000000","extraData":"0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfe3366e7"},{"name":"homestead","block":0,"forkHash":"0xfe3366e7"},{"name":"tangerineWhistle","block":0,"forkHash":"0xfe3366e7"},{"name":"spuriousDragon","block":0,"forkHash":"0xfe3366e7"},{"name":"byzantium","block":0,"forkHash":"0xfe3366e7"},{"name":"constantinople","block":0,"forkHash":"0xfe3366e7"},{"name":"petersburg","block":0,"forkHash":"0xfe3366e7"},{"name":"istanbul","block":0,"forkHash":"0xfe3366e7"},{"name":"muirGlacier","block":0,"forkHash":"0xfe3366e7"},{"name":"berlin","block":0,"forkHash":"0xfe3366e7"},{"name":"london","block":0,"forkHash":"0xfe3366e7"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408","name":"merge","ttd":"17000000000000000","block":1450409,"forkHash":"0xfe3366e7"},{"name":"mergeForkIdTransition","block":1735371,"forkHash":"0xb96cbd13"},{"name":"shanghai","block":null,"timestamp":"1677557088","forkHash":"0xf7f9bc08"}],"bootstrapNodes":[{"ip":"18.168.182.86","port":30303,"id":"9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066","location":"","comment":"geth"},{"ip":"52.14.151.177","port":30303,"id":"ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7","location":"","comment":"besu"},{"ip":"165.22.196.173","port":30303,"id":"ce970ad2e9daa9e14593de84a8b49da3d54ccfdf83cbc4fe519cb8b36b5918ed4eab087dedd4a62479b8d50756b492d5f762367c8d20329a7854ec01547568a6","location":"","comment":"EF"},{"ip":"65.108.95.67","port":30303,"id":"075503b13ed736244896efcde2a992ec0b451357d46cb7a8132c0384721742597fc8f0d91bbb40bb52e7d6e66728d36a1fda09176294e4a30cfac55dcce26bc6","location":"","comment":"lodestar"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"]}')
        },
        64104: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-1153","number":1153,"comment":"Transient Storage","url":"https://eips.ethereum.org/EIPS/eip-1153","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"tstore":{"v":100,"d":"Base fee of the TSTORE opcode"},"tload":{"v":100,"d":"Base fee of the TLOAD opcode"}},"vm":{},"pow":{}}')
        },
        41187: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-1559","number":1559,"comment":"Fee market change for ETH 1.0 chain","url":"https://eips.ethereum.org/EIPS/eip-1559","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2930],"gasConfig":{"baseFeeMaxChangeDenominator":{"v":8,"d":"Maximum base fee change denominator"},"elasticityMultiplier":{"v":2,"d":"Maximum block gas target elasticity"},"initialBaseFee":{"v":1000000000,"d":"Initial base fee on first EIP1559 block"}},"gasPrices":{},"vm":{},"pow":{}}')
        },
        22643: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2315","number":2315,"comment":"Simple subroutines for the EVM","url":"https://eips.ethereum.org/EIPS/eip-2315","status":"Draft","minimumHardfork":"istanbul","gasConfig":{},"gasPrices":{"beginsub":{"v":2,"d":"Base fee of the BEGINSUB opcode"},"returnsub":{"v":5,"d":"Base fee of the RETURNSUB opcode"},"jumpsub":{"v":10,"d":"Base fee of the JUMPSUB opcode"}},"vm":{},"pow":{}}')
        },
        77158: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2537","number":2537,"comment":"BLS12-381 precompiles","url":"https://eips.ethereum.org/EIPS/eip-2537","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"Bls12381G1AddGas":{"v":600,"d":"Gas cost of a single BLS12-381 G1 addition precompile-call"},"Bls12381G1MulGas":{"v":12000,"d":"Gas cost of a single BLS12-381 G1 multiplication precompile-call"},"Bls12381G2AddGas":{"v":4500,"d":"Gas cost of a single BLS12-381 G2 addition precompile-call"},"Bls12381G2MulGas":{"v":55000,"d":"Gas cost of a single BLS12-381 G2 multiplication precompile-call"},"Bls12381PairingBaseGas":{"v":115000,"d":"Base gas cost of BLS12-381 pairing check"},"Bls12381PairingPerPairGas":{"v":23000,"d":"Per-pair gas cost of BLS12-381 pairing check"},"Bls12381MapG1Gas":{"v":5500,"d":"Gas cost of BLS12-381 map field element to G1"},"Bls12381MapG2Gas":{"v":110000,"d":"Gas cost of BLS12-381 map field element to G2"},"Bls12381MultiExpGasDiscount":{"v":[[1,1200],[2,888],[3,764],[4,641],[5,594],[6,547],[7,500],[8,453],[9,438],[10,423],[11,408],[12,394],[13,379],[14,364],[15,349],[16,334],[17,330],[18,326],[19,322],[20,318],[21,314],[22,310],[23,306],[24,302],[25,298],[26,294],[27,289],[28,285],[29,281],[30,277],[31,273],[32,269],[33,268],[34,266],[35,265],[36,263],[37,262],[38,260],[39,259],[40,257],[41,256],[42,254],[43,253],[44,251],[45,250],[46,248],[47,247],[48,245],[49,244],[50,242],[51,241],[52,239],[53,238],[54,236],[55,235],[56,233],[57,232],[58,231],[59,229],[60,228],[61,226],[62,225],[63,223],[64,222],[65,221],[66,220],[67,219],[68,219],[69,218],[70,217],[71,216],[72,216],[73,215],[74,214],[75,213],[76,213],[77,212],[78,211],[79,211],[80,210],[81,209],[82,208],[83,208],[84,207],[85,206],[86,205],[87,205],[88,204],[89,203],[90,202],[91,202],[92,201],[93,200],[94,199],[95,199],[96,198],[97,197],[98,196],[99,196],[100,195],[101,194],[102,193],[103,193],[104,192],[105,191],[106,191],[107,190],[108,189],[109,188],[110,188],[111,187],[112,186],[113,185],[114,185],[115,184],[116,183],[117,182],[118,182],[119,181],[120,180],[121,179],[122,179],[123,178],[124,177],[125,176],[126,176],[127,175],[128,174]],"d":"Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"}},"vm":{},"pow":{}}')
        },
        8499: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2565","number":2565,"comment":"ModExp gas cost","url":"https://eips.ethereum.org/EIPS/eip-2565","status":"Final","minimumHardfork":"byzantium","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":3,"d":"Gquaddivisor from modexp precompile for gas calculation"}},"vm":{},"pow":{}}')
        },
        76796: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2718","comment":"Typed Transaction Envelope","url":"https://eips.ethereum.org/EIPS/eip-2718","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        18345: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2929","comment":"Gas cost increases for state access opcodes","url":"https://eips.ethereum.org/EIPS/eip-2929","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"coldsload":{"v":2100,"d":"Gas cost of the first read of storage from a given location (per transaction)"},"coldaccountaccess":{"v":2600,"d":"Gas cost of the first read of a given address (per transaction)"},"warmstorageread":{"v":100,"d":"Gas cost of reading storage locations which have already loaded \'cold\'"},"sstoreCleanGasEIP2200":{"v":2900,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreNoopGasEIP2200":{"v":100,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":100,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitRefundEIP2200":{"v":19900,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanRefundEIP2200":{"v":4900,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"call":{"v":0,"d":"Base fee of the CALL opcode"},"callcode":{"v":0,"d":"Base fee of the CALLCODE opcode"},"delegatecall":{"v":0,"d":"Base fee of the DELEGATECALL opcode"},"staticcall":{"v":0,"d":"Base fee of the STATICCALL opcode"},"balance":{"v":0,"d":"Base fee of the BALANCE opcode"},"extcodesize":{"v":0,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":0,"d":"Base fee of the EXTCODECOPY opcode"},"extcodehash":{"v":0,"d":"Base fee of the EXTCODEHASH opcode"},"sload":{"v":0,"d":"Base fee of the SLOAD opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"}},"vm":{},"pow":{}}')
        },
        18185: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-2930","comment":"Optional access lists","url":"https://eips.ethereum.org/EIPS/eip-2930","status":"Final","minimumHardfork":"istanbul","requiredEIPs":[2718,2929],"gasConfig":{},"gasPrices":{"accessListStorageKeyCost":{"v":1900,"d":"Gas cost per storage key in an Access List transaction"},"accessListAddressCost":{"v":2400,"d":"Gas cost per storage key in an Access List transaction"}},"vm":{},"pow":{}}')
        },
        59579: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3074","number":3074,"comment":"AUTH and AUTHCALL opcodes","url":"https://eips.ethereum.org/EIPS/eip-3074","status":"Review","minimumHardfork":"london","gasConfig":{},"gasPrices":{"auth":{"v":3100,"d":"Gas cost of the AUTH opcode"},"authcall":{"v":0,"d":"Gas cost of the AUTHCALL opcode"},"authcallValueTransfer":{"v":6700,"d":"Paid for CALL when the value transfer is non-zero"}},"vm":{},"pow":{}}')
        },
        40445: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3198","number":3198,"comment":"BASEFEE opcode","url":"https://eips.ethereum.org/EIPS/eip-3198","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{"basefee":{"v":2,"d":"Gas cost of the BASEFEE opcode"}},"vm":{},"pow":{}}')
        },
        16102: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3529","comment":"Reduction in refunds","url":"https://eips.ethereum.org/EIPS/eip-3529","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2929],"gasConfig":{"maxRefundQuotient":{"v":5,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"selfdestructRefund":{"v":0,"d":"Refunded following a selfdestruct operation"},"sstoreClearRefundEIP2200":{"v":4800,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{}}')
        },
        1800: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3540","number":3540,"comment":"EVM Object Format (EOF) v1","url":"https://eips.ethereum.org/EIPS/eip-3540","status":"Review","minimumHardfork":"london","requiredEIPs":[3541],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        22867: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3541","comment":"Reject new contracts starting with the 0xEF byte","url":"https://eips.ethereum.org/EIPS/eip-3541","status":"Final","minimumHardfork":"berlin","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        98691: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3554","comment":"Reduction in refunds","url":"Difficulty Bomb Delay to December 1st 2021","status":"Final","minimumHardfork":"muirGlacier","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9500000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        74519: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3607","number":3607,"comment":"Reject transactions from senders with deployed code","url":"https://eips.ethereum.org/EIPS/eip-3607","status":"Final","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        37459: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3651","number":3198,"comment":"Warm COINBASE","url":"https://eips.ethereum.org/EIPS/eip-3651","status":"Review","minimumHardfork":"london","requiredEIPs":[2929],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        83632: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3670","number":3670,"comment":"EOF - Code Validation","url":"https://eips.ethereum.org/EIPS/eip-3670","status":"Review","minimumHardfork":"london","requiredEIPs":[3540],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        21794: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3675","number":3675,"comment":"Upgrade consensus to Proof-of-Stake","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Final","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        27749: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3855","number":3855,"comment":"PUSH0 instruction","url":"https://eips.ethereum.org/EIPS/eip-3855","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"push0":{"v":2,"d":"Base fee of the PUSH0 opcode"}},"vm":{},"pow":{}}')
        },
        99063: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-3860","number":3860,"comment":"Limit and meter initcode","url":"https://eips.ethereum.org/EIPS/eip-3860","status":"Review","minimumHardfork":"spuriousDragon","requiredEIPs":[],"gasConfig":{},"gasPrices":{"initCodeWordCost":{"v":2,"d":"Gas to pay for each word (32 bytes) of initcode when creating a contract"}},"vm":{"maxInitCodeSize":{"v":49152,"d":"Maximum length of initialization code when creating a contract"}},"pow":{}}')
        },
        47113: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-4345","number":4345,"comment":"Difficulty Bomb Delay to June 2022","url":"https://eips.ethereum.org/EIPS/eip-4345","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":10700000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        59602: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-4399","number":4399,"comment":"Supplant DIFFICULTY opcode with PREVRANDAO","url":"https://eips.ethereum.org/EIPS/eip-4399","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        4240: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-4844","number":4844,"comment":"Shard Blob Transactions","url":"https://eips.ethereum.org/EIPS/eip-4844","status":"Draft","minimumHardfork":"merge","requiredEIPs":[1559,2718,2930,4895],"gasConfig":{"dataGasPerBlob":{"v":131072,"d":"The base fee for data gas per blob"},"targetDataGasPerBlock":{"v":262144,"d":"The target data gas consumed per block"},"maxDataGasPerBlock":{"v":524288,"d":"The max data gas allowable per block"},"dataGasPriceUpdateFraction":{"v":2225652,"d":"The denominator used in the exponential when calculating a data gas price"}},"gasPrices":{"simpleGasPerBlob":{"v":12000,"d":"The basic gas fee for each blob"},"minDataGasPrice":{"v":1,"d":"The minimum fee per data gas"},"kzgPointEvaluationGasPrecompilePrice":{"v":50000,"d":"The fee associated with the point evaluation precompile"},"datahash":{"v":3,"d":"Base fee of the DATAHASH opcode"}},"sharding":{"blobCommitmentVersionKzg":{"v":1,"d":"The number indicated a versioned hash is a KZG commitment"},"fieldElementsPerBlob":{"v":4096,"d":"The number of field elements allowed per blob"}},"vm":{},"pow":{}}')
        },
        15357: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-4895","number":4895,"comment":"Beacon chain push withdrawals as operations","url":"https://eips.ethereum.org/EIPS/eip-4895","status":"Review","minimumHardfork":"merge","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        84304: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"EIP-5133","number":5133,"comment":"Delaying Difficulty Bomb to mid-September 2022","url":"https://eips.ethereum.org/EIPS/eip-5133","status":"Draft","minimumHardfork":"grayGlacier","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":11400000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        24211: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"arrowGlacier","comment":"HF to delay the difficulty bomb","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md","status":"Final","eips":[4345],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        15880: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"berlin","comment":"HF targeted for July 2020 following the Muir Glacier HF","url":"https://eips.ethereum.org/EIPS/eip-2070","status":"Final","eips":[2565,2929,2718,2930]}')
        },
        3099: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"},"revert":{"v":0,"d":"Base fee of the REVERT opcode"},"staticcall":{"v":700,"d":"Base fee of the STATICCALL opcode"},"returndatasize":{"v":2,"d":"Base fee of the RETURNDATASIZE opcode"},"returndatacopy":{"v":3,"d":"Base fee of the RETURNDATACOPY opcode"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":3000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        28158: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"chainstart","comment":"Start of the Ethereum main chain","url":"","status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"},"maxRefundQuotient":{"v":2,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Base fee of the EXP opcode"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Base fee of the SHA3 opcode"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Base fee of the SLOAD opcode"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Base fee of the JUMPDEST opcode"},"log":{"v":375,"d":"Base fee of the LOG opcode"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Base fee of the CREATE opcode"},"call":{"v":40,"d":"Base fee of the CALL opcode"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""},"stop":{"v":0,"d":"Base fee of the STOP opcode"},"add":{"v":3,"d":"Base fee of the ADD opcode"},"mul":{"v":5,"d":"Base fee of the MUL opcode"},"sub":{"v":3,"d":"Base fee of the SUB opcode"},"div":{"v":5,"d":"Base fee of the DIV opcode"},"sdiv":{"v":5,"d":"Base fee of the SDIV opcode"},"mod":{"v":5,"d":"Base fee of the MOD opcode"},"smod":{"v":5,"d":"Base fee of the SMOD opcode"},"addmod":{"v":8,"d":"Base fee of the ADDMOD opcode"},"mulmod":{"v":8,"d":"Base fee of the MULMOD opcode"},"signextend":{"v":5,"d":"Base fee of the SIGNEXTEND opcode"},"lt":{"v":3,"d":"Base fee of the LT opcode"},"gt":{"v":3,"d":"Base fee of the GT opcode"},"slt":{"v":3,"d":"Base fee of the SLT opcode"},"sgt":{"v":3,"d":"Base fee of the SGT opcode"},"eq":{"v":3,"d":"Base fee of the EQ opcode"},"iszero":{"v":3,"d":"Base fee of the ISZERO opcode"},"and":{"v":3,"d":"Base fee of the AND opcode"},"or":{"v":3,"d":"Base fee of the OR opcode"},"xor":{"v":3,"d":"Base fee of the XOR opcode"},"not":{"v":3,"d":"Base fee of the NOT opcode"},"byte":{"v":3,"d":"Base fee of the BYTE opcode"},"address":{"v":2,"d":"Base fee of the ADDRESS opcode"},"balance":{"v":20,"d":"Base fee of the BALANCE opcode"},"origin":{"v":2,"d":"Base fee of the ORIGIN opcode"},"caller":{"v":2,"d":"Base fee of the CALLER opcode"},"callvalue":{"v":2,"d":"Base fee of the CALLVALUE opcode"},"calldataload":{"v":3,"d":"Base fee of the CALLDATALOAD opcode"},"calldatasize":{"v":2,"d":"Base fee of the CALLDATASIZE opcode"},"calldatacopy":{"v":3,"d":"Base fee of the CALLDATACOPY opcode"},"codesize":{"v":2,"d":"Base fee of the CODESIZE opcode"},"codecopy":{"v":3,"d":"Base fee of the CODECOPY opcode"},"gasprice":{"v":2,"d":"Base fee of the GASPRICE opcode"},"extcodesize":{"v":20,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":20,"d":"Base fee of the EXTCODECOPY opcode"},"blockhash":{"v":20,"d":"Base fee of the BLOCKHASH opcode"},"coinbase":{"v":2,"d":"Base fee of the COINBASE opcode"},"timestamp":{"v":2,"d":"Base fee of the TIMESTAMP opcode"},"number":{"v":2,"d":"Base fee of the NUMBER opcode"},"difficulty":{"v":2,"d":"Base fee of the DIFFICULTY opcode"},"gaslimit":{"v":2,"d":"Base fee of the GASLIMIT opcode"},"pop":{"v":2,"d":"Base fee of the POP opcode"},"mload":{"v":3,"d":"Base fee of the MLOAD opcode"},"mstore":{"v":3,"d":"Base fee of the MSTORE opcode"},"mstore8":{"v":3,"d":"Base fee of the MSTORE8 opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"},"jump":{"v":8,"d":"Base fee of the JUMP opcode"},"jumpi":{"v":10,"d":"Base fee of the JUMPI opcode"},"pc":{"v":2,"d":"Base fee of the PC opcode"},"msize":{"v":2,"d":"Base fee of the MSIZE opcode"},"gas":{"v":2,"d":"Base fee of the GAS opcode"},"push":{"v":3,"d":"Base fee of the PUSH opcode"},"dup":{"v":3,"d":"Base fee of the DUP opcode"},"swap":{"v":3,"d":"Base fee of the SWAP opcode"},"callcode":{"v":40,"d":"Base fee of the CALLCODE opcode"},"return":{"v":0,"d":"Base fee of the RETURN opcode"},"invalid":{"v":0,"d":"Base fee of the INVALID opcode"},"selfdestruct":{"v":0,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":0,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        3068: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"},"shl":{"v":3,"d":"Base fee of the SHL opcode"},"shr":{"v":3,"d":"Base fee of the SHR opcode"},"sar":{"v":3,"d":"Base fee of the SAR opcode"},"extcodehash":{"v":400,"d":"Base fee of the EXTCODEHASH opcode"},"create2":{"v":32000,"d":"Base fee of the CREATE2 opcode"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"},"difficultyBombDelay":{"v":5000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        36888: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"dao","comment":"DAO rescue hardfork","url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        87184: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"grayGlacier","comment":"Delaying the difficulty bomb to Mid September 2022","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md","status":"Draft","eips":[5133],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}')
        },
        45516: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final","gasConfig":{},"gasPrices":{"delegatecall":{"v":40,"d":"Base fee of the DELEGATECALL opcode"}},"vm":{},"pow":{}}')
        },
        10208: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Final","gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"balance":{"v":700,"d":"Base fee of the BALANCE opcode"},"extcodehash":{"v":700,"d":"Base fee of the EXTCODEHASH opcode"},"chainid":{"v":2,"d":"Base fee of the CHAINID opcode"},"selfbalance":{"v":5,"d":"Base fee of the SELFBALANCE opcode"},"sload":{"v":800,"d":"Base fee of the SLOAD opcode"}},"vm":{},"pow":{}}')
        },
        73352: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"london","comment":"HF targeted for July 2021 following the Berlin fork","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md","status":"Final","eips":[1559,3198,3529,3541]}')
        },
        977: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"merge","comment":"Hardfork to upgrade the consensus mechanism to Proof-of-Stake","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md","status":"Final","consensus":{"type":"pos","algorithm":"casper","casper":{}},"eips":[3675,4399]}')
        },
        99402: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"mergeForkIdTransition","comment":"Pre-merge hardfork to fork off non-upgraded clients","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Draft","eips":[]}')
        },
        90050: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}')
        },
        13385: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{}}')
        },
        30369: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"shanghai","comment":"Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md","status":"Final","eips":[3651,3855,3860,4895]}')
        },
        7968: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"shardingFork","comment":"Internal hardfork to test proto-danksharding (do not use in production)","url":"https://eips.ethereum.org/EIPS/eip-4844","status":"Experimental","eips":[4844]}')
        },
        82146: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final","gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{}}')
        },
        94350: K => {
            "use strict";
            K.exports = JSON.parse('{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final","gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"},"extcodesize":{"v":700,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":700,"d":"Base fee of the EXTCODECOPY opcode"},"balance":{"v":400,"d":"Base fee of the BALANCE opcode"},"delegatecall":{"v":700,"d":"Base fee of the DELEGATECALL opcode"},"callcode":{"v":700,"d":"Base fee of the CALLCODE opcode"},"selfdestruct":{"v":5000,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{},"pow":{}}')
        }
    }
]);