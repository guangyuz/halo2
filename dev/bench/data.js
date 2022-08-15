window.BENCHMARK_DATA = {
  "lastUpdate": 1660538086063,
  "repoUrl": "https://github.com/guangyuz/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tinghan0110@gmail.com",
            "name": "han0110",
            "username": "han0110"
          },
          "committer": {
            "email": "yingtong@z.cash",
            "name": "ying tong",
            "username": "therealyingtong"
          },
          "distinct": true,
          "id": "8ff5b1e3af95ce8e9dcf1e74173d3d62ad1770b0",
          "message": "feat: make `Expression::{Fixed,Advice,Instance}` to wrap their own `Query` struct",
          "timestamp": "2022-07-15T10:33:47-04:00",
          "tree_id": "4e392a8c081fd14d6c62fad128b58f041be30bd1",
          "url": "https://github.com/guangyuz/halo2/commit/8ff5b1e3af95ce8e9dcf1e74173d3d62ad1770b0"
        },
        "date": 1660538082388,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 75256718,
            "range": "± 8766313",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3727176,
            "range": "± 288536",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 160825263,
            "range": "± 8366645",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4448990,
            "range": "± 313122",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 213030103,
            "range": "± 8584219",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4847477,
            "range": "± 218822",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 48824,
            "range": "± 3108",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 162105,
            "range": "± 11017",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 169519,
            "range": "± 10126",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 282925,
            "range": "± 18871",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 302671,
            "range": "± 21650",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 166001,
            "range": "± 16301",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 178204,
            "range": "± 10929",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 288778,
            "range": "± 15412",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 291327,
            "range": "± 21268",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 346960,
            "range": "± 13931",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 351299,
            "range": "± 24184",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 456651,
            "range": "± 28265",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 473657,
            "range": "± 20291",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3371655,
            "range": "± 145472",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6721336,
            "range": "± 139304",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 11857176,
            "range": "± 453189",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 24756948,
            "range": "± 932055",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 51917621,
            "range": "± 1485723",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 98634985,
            "range": "± 4471858",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8639,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9941,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 18769,
            "range": "± 3579",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 24852,
            "range": "± 2551",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 33980,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 57257,
            "range": "± 4852",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 118656,
            "range": "± 10429",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 231550,
            "range": "± 25335",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 485122,
            "range": "± 114393",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 1023009,
            "range": "± 85671",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2095701,
            "range": "± 112523",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4729240,
            "range": "± 340726",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 10097089,
            "range": "± 603982",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 21716207,
            "range": "± 1176859",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 47464364,
            "range": "± 2726249",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 108510633,
            "range": "± 5202342",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 33037,
            "range": "± 1796",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 33011,
            "range": "± 1719",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 183943164,
            "range": "± 16635190",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 395672554,
            "range": "± 11211788",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 871182747,
            "range": "± 15620650",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1906448027,
            "range": "± 30019409",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 4057370150,
            "range": "± 83462288",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8559759953,
            "range": "± 120690839",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 18181068365,
            "range": "± 173772645",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 38664505144,
            "range": "± 592133972",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 79861609757,
            "range": "± 1760681186",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 123275711,
            "range": "± 3221899",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 211367832,
            "range": "± 5195646",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 385282376,
            "range": "± 3594085",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 689019264,
            "range": "± 8583540",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1300651483,
            "range": "± 24794843",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2463978419,
            "range": "± 77382120",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4390014480,
            "range": "± 78476365",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8362462285,
            "range": "± 282955736",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 16145212560,
            "range": "± 145705364",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6030117,
            "range": "± 381114",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9342691,
            "range": "± 586485",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15395978,
            "range": "± 922993",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 26587187,
            "range": "± 1677917",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 45478064,
            "range": "± 2909403",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 79838961,
            "range": "± 4706703",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 148958651,
            "range": "± 7142426",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 272960435,
            "range": "± 10188328",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 491202024,
            "range": "± 15955840",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}