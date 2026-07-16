let main = {
    variables: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        gameOver: false,
        promotionData: null,
        pieces: {
            w_king: {
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'w_king'

            },
            w_queen: {
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'w_queen'
            },
            w_bishop1: {
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_bishop2: {
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_knight1: {
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_knight2: {
                position: '7_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_rook1: {
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_rook2: {
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_pawn1: {
                position: '1_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn2: {
                position: '2_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn3: {
                position: '3_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn4: {
                position: '4_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn5: {
                position: '5_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn6: {
                position: '6_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn7: {
                position: '7_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn8: {
                position: '8_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },

            b_king: {
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 'b_king'
            },
            b_queen: {
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'b_queen'
            },
            b_bishop1: {
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_bishop2: {
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_knight1: {
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_knight2: {
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_rook1: {
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_rook2: {
                position: '8_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_pawn1: {
                position: '1_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn2: {
                position: '2_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn3: {
                position: '3_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn4: {
                position: '4_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn5: {
                position: '5_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn6: {
                position: '6_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn7: {
                position: '7_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn8: {
                position: '8_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            }
        }
    },
    methods: {
        gamesetup: function () {
            $('.cell').attr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                if (!main.variables.pieces[gamepiece].captured) {
                    if (main.variables.pieces[gamepiece].position) {
                        $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
                        $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
                    }
                }
            }
        },

        moveoptions: function (selectedpiece) {
            if (main.variables.gameOver) {
                return;
            }
            let position = { x: '', y: '' };
            position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
            position.y = main.variables.pieces[selectedpiece].position.split('_')[1];
            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1, c2, c3, c4, c5, c6, c7, c8;
            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted = [];
            }
            let color = main.variables.pieces[selectedpiece].type.slice(0, 1);
            switch (main.variables.pieces[selectedpiece].type) {
                case 'w_king':
                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' &&
                        main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 },
                        { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
                        { x: 2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 },
                        { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    break;
                case 'b_king':
                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' &&
                        main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 },
                        { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 },
                        { x: 2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 },
                        { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    break;
                case 'w_queen':
                case 'w_queen1':
                case 'w_queen2':
                case 'w_queen3':
                case 'w_queen4':
                case 'w_queen5':
                case 'w_queen6':
                case 'w_queen7':
                case 'w_queen8':
                case 'w_queen9':
                    c1 = main.methods.w_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.w_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.w_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.w_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.w_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.w_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.w_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                    options = coordinates.slice(0);
                    break;
                case 'b_queen':
                case 'b_queen1':
                case 'b_queen2':
                case 'b_queen3':
                case 'b_queen4':
                case 'b_queen5':
                case 'b_queen6':
                case 'b_queen7':
                case 'b_queen8':
                case 'b_queen9':
                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                    options = coordinates.slice(0);
                    break;

                case 'w_bishop':
                    c1 = main.methods.w_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.w_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.w_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    options = coordinates.slice(0);
                    break;

                case 'b_bishop':
                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    options = coordinates.slice(0);
                    break;

                case 'w_knight':
                case 'b_knight':
                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 },
                    { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    break;

                case 'w_rook':
                    c1 = main.methods.w_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.w_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.w_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    options = coordinates.slice(0);
                    break;

                case 'b_rook':
                    c1 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    options = coordinates.slice(0);
                    break;

                case 'w_pawn':
                    if (main.variables.pieces[selectedpiece].moved == false) {
                        coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    break;

                case 'b_pawn':
                    if (main.variables.pieces[selectedpiece].moved == false) {
                        coordinates = [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    break;
            }
            let filteredOptions = options.filter(function (targetPos) {
                let capturedPiece = $('#' + targetPos).attr('chess');
                let originalPos = main.variables.pieces[selectedpiece].position;
                $('#' + targetPos).html(main.variables.pieces[selectedpiece].img);
                $('#' + targetPos).attr('chess', selectedpiece);
                $('#' + originalPos).html('');
                $('#' + originalPos).attr('chess', 'null');
                let oldPos = main.variables.pieces[selectedpiece].position;
                main.variables.pieces[selectedpiece].position = targetPos;
                if (capturedPiece && capturedPiece !== 'null') {
                    main.variables.pieces[capturedPiece].captured = true;
                }
                let inCheck = main.methods.isInCheck(color);
                main.variables.pieces[selectedpiece].position = oldPos;
                $('#' + originalPos).html(main.variables.pieces[selectedpiece].img);
                $('#' + originalPos).attr('chess', selectedpiece);
                $('#' + targetPos).html('');
                $('#' + targetPos).attr('chess', 'null');

                if (capturedPiece && capturedPiece !== 'null') {
                    main.variables.pieces[capturedPiece].captured = false;
                    $('#' + targetPos).html(main.variables.pieces[capturedPiece].img);
                    $('#' + targetPos).attr('chess', capturedPiece);
                }
                return !inCheck;
            });
            main.variables.highlighted = filteredOptions.slice(0);
            main.methods.togglehighlight(filteredOptions);
        },

        options: function (startpoint, coordinates, piecetype) {
            coordinates = coordinates.filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);
                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            });
            switch (piecetype) {
                case 'w_king':
                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });
                    break;
                case 'b_king':
                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });
                    break;
                case 'w_knight':
                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });
                    break;
                case 'b_knight':
                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });
                    break;
                case 'w_pawn':
                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');
                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];
                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                        } else {
                            if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null') {
                                return false;
                            } else {
                                return ($('#' + val).attr('chess') == 'null');
                            }
                        }
                    });
                    break;
                case 'b_pawn':
                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');
                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];
                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                        } else {
                            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null') {
                                return false;
                            } else {
                                return ($('#' + val).attr('chess') == 'null');
                            }
                        }
                    });
                    break;
            }
            return coordinates;
        },

        w_options: function (position, coordinates) {
            let flag = false;
            coordinates = coordinates.map(function (val) {
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);
                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            }).filter(val => {
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        console.log(val + '-3')
                        flag = true;
                    }
                }
            });
            return coordinates;
        },

        b_options: function (position, coordinates) {
            let flag = false;
            coordinates = coordinates.map(function (val) {
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);
                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            }).filter(val => {
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        flag = true;
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                    }
                }
            });
            return coordinates;
        },

        capture: function (target) {
            let selectedpiece = {
                name: $('#' + main.variables.selectedpiece).attr('chess'),
                id: main.variables.selectedpiece
            };
            $('#' + target.id).html(main.variables.pieces[selectedpiece.name].img);
            $('#' + target.id).attr('chess', selectedpiece.name);
            $('#' + selectedpiece.id).html('');
            $('#' + selectedpiece.id).attr('chess', 'null');
            main.variables.pieces[selectedpiece.name].position = target.id;
            main.variables.pieces[selectedpiece.name].moved = true;
            main.variables.pieces[target.name].captured = true;
            main.methods.checkPromotion(target.id, selectedpiece.name);
        },

        move: function (target) {
            let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');
            $('#' + target.id).html(main.variables.pieces[selectedpiece].img);
            $('#' + target.id).attr('chess', selectedpiece);
            $('#' + main.variables.selectedpiece).html('');
            $('#' + main.variables.selectedpiece).attr('chess', 'null');
            main.variables.pieces[selectedpiece].position = target.id;
            main.variables.pieces[selectedpiece].moved = true;
            main.methods.checkPromotion(target.id, selectedpiece);
        },

        endturn: function () {
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted = [];
            main.variables.selectedpiece = '';            
            $('#turn').removeClass('turnhighlight turnheightlight check checkmate');
            if (main.variables.turn == 'w') {
                main.variables.turn = 'b';                
                let inCheck = main.methods.isInCheck('b');
                let isCheckmate = false;

                if (inCheck) {
                    isCheckmate = main.methods.isCheckmate('b');
                    if (isCheckmate) {
                        $('#turn').html("CHECKMATE! White Wins!");
                        $('#turn').addClass('checkmate');
                        main.variables.gameOver = true;
                        return;
                    } else {
                        $('#turn').html("Black is in CHECK!");
                        $('#turn').addClass('check');                        
                        return;
                    }
                }                
                $('#turn').html("It's Blacks Turn");
                $('#turn').addClass('turnhighlight');
                setTimeout(function () {
                    $('#turn').removeClass('turnhighlight');
                }, 1500);
            } else if (main.variables.turn == 'b') {
                main.variables.turn = 'w';                
                let inCheck = main.methods.isInCheck('w');
                let isCheckmate = false;
                if (inCheck) {
                    isCheckmate = main.methods.isCheckmate('w');
                    if (isCheckmate) {
                        $('#turn').html("CHECKMATE! Black Wins!");
                        $('#turn').addClass('checkmate');
                        main.variables.gameOver = true;
                        return;
                    } else {
                        $('#turn').html("White is in CHECK!");
                        $('#turn').addClass('check');
                        // Keep the check styling visible
                        return;
                    }
                }
                $('#turn').html("It's Whites Turn");
                $('#turn').addClass('turnhighlight');
                setTimeout(function () {
                    $('#turn').removeClass('turnhighlight');
                }, 1500);
            }
        },

        togglehighlight: function (options) {
            options.forEach(function (element, index, array) {
                $('#' + element).toggleClass("green shake-little green_txt");
            });
        },

        checkPromotion: function (position, pieceName, callback) {
            if (!pieceName || pieceName.slice(0, 1) !== 'w' && pieceName.slice(0, 1) !== 'b') {
                return false;
            }
            let pieceType = main.variables.pieces[pieceName] ? main.variables.pieces[pieceName].type : '';
            if (pieceType !== 'w_pawn' && pieceType !== 'b_pawn') {
                return false;
            }
            let y = parseInt(position.split('_')[1]);
            let color = pieceName.slice(0, 1);
            if ((color == 'w' && y == 8) || (color == 'b' && y == 1)) {
                main.variables.promotionData = {
                    position: position,
                    pieceName: pieceName,
                    color: color,
                    callback: callback || null
                };
                main.methods.showPromotionDialog(color);
                return true;
            }
            return false;
        },

        showPromotionDialog: function (color) {
            const pieces = [
                { type: 'queen', symbol: color == 'w' ? '&#9813;' : '&#9819;', label: 'Queen' },
                { type: 'rook', symbol: color == 'w' ? '&#9814;' : '&#9820;', label: 'Rook' },
                { type: 'bishop', symbol: color == 'w' ? '&#9815;' : '&#9821;', label: 'Bishop' },
                { type: 'knight', symbol: color == 'w' ? '&#9816;' : '&#9822;', label: 'Knight' }
            ];
            const dialog = document.getElementById('promotion-dialog');
            const overlay = document.getElementById('promotion-overlay');
            const optionsContainer = document.getElementById('promotion-options');
            optionsContainer.innerHTML = '';
            pieces.forEach(piece => {
                const option = document.createElement('div');
                option.className = 'promotion-option';
                option.innerHTML = piece.symbol;
                option.title = piece.label;
                option.dataset.pieceType = piece.type;
                option.addEventListener('click', function () {
                    main.methods.handlePromotionChoice(piece.type);
                });
                optionsContainer.appendChild(option);
            });
            dialog.style.display = 'block';
            overlay.style.display = 'block';
            overlay.onclick = function () {
            };
        },

        handlePromotionChoice: function (pieceType) {
            const data = main.variables.promotionData;
            if (!data) return;
            const { position, pieceName, color, callback } = data;
            let pieceNumber = 1;
            let newPieceName = color + '_' + pieceType + pieceNumber;
            while (main.variables.pieces[newPieceName] && !main.variables.pieces[newPieceName].captured) {
                pieceNumber++;
                newPieceName = color + '_' + pieceType + pieceNumber;
            }
            if (main.variables.pieces[newPieceName] && main.variables.pieces[newPieceName].captured) {
                main.variables.pieces[newPieceName].position = position;
                main.variables.pieces[newPieceName].captured = false;
                main.variables.pieces[newPieceName].moved = false;
                main.variables.pieces[newPieceName].img = color == 'w' ?
                    main.methods.getPieceSymbol(color, pieceType) :
                    main.methods.getPieceSymbol(color, pieceType);
            } else {
                const symbols = {
                    'w_queen': '&#9813;', 'b_queen': '&#9819;',
                    'w_rook': '&#9814;', 'b_rook': '&#9820;',
                    'w_bishop': '&#9815;', 'b_bishop': '&#9821;',
                    'w_knight': '&#9816;', 'b_knight': '&#9822;'
                };
                main.variables.pieces[newPieceName] = {
                    position: position,
                    img: symbols[color + '_' + pieceType] || (color == 'w' ? '&#9813;' : '&#9819;'),
                    captured: false,
                    moved: false,
                    type: color + '_' + pieceType
                };
            }
            $('#' + position).html(main.variables.pieces[newPieceName].img);
            $('#' + position).attr('chess', newPieceName);
            main.variables.pieces[pieceName].captured = true;
            document.getElementById('promotion-dialog').style.display = 'none';
            document.getElementById('promotion-overlay').style.display = 'none';
            const pieceLabels = { queen: 'Queen', rook: 'Rook', bishop: 'Bishop', knight: 'Knight' };
            $('#turn').html((color == 'w' ? 'White' : 'Black') + ' pawn promoted to ' + pieceLabels[pieceType] + '!');
            $('#turn').addClass('turnheightlight');
            setTimeout(function () {
                $('#turn').removeClass('turnheightlight');
            }, 1500);
            main.variables.promotionData = null;
            if (callback) {
                callback();
            }
        },

        getPieceSymbol: function (color, type) {
            const symbols = {
                'w_queen': '&#9813;', 'b_queen': '&#9819;',
                'w_rook': '&#9814;', 'b_rook': '&#9820;',
                'w_bishop': '&#9815;', 'b_bishop': '&#9821;',
                'w_knight': '&#9816;', 'b_knight': '&#9822;'
            };
            return symbols[color + '_' + type] || '&#9813;';
        },

        findKing: function (color) {
            for (let pieceName in main.variables.pieces) {
                let piece = main.variables.pieces[pieceName];
                if (piece.type === color + '_king' && !piece.captured) {
                    return piece.position;
                }
            }
            return null;
        },

        isSquareUnderAttack: function (position, byColor) {
            for (let pieceName in main.variables.pieces) {
                let piece = main.variables.pieces[pieceName];
                if (piece.captured) continue;
                if (piece.type.slice(0, 1) !== byColor) continue;
                let moves = main.methods.getRawMoves(pieceName);
                if (moves.indexOf(position) !== -1) {
                    return true;
                }
            }
            return false;
        },

        getRawMoves: function (pieceName) {
            let piece = main.variables.pieces[pieceName];
            if (!piece || piece.captured) return [];
            let position = { x: '', y: '' };
            position.x = piece.position.split('_')[0];
            position.y = piece.position.split('_')[1];
            let coordinates = [];
            let startpoint = piece.position;
            let c1, c2, c3, c4, c5, c6, c7, c8;
            switch (piece.type) {
                case 'w_king':
                case 'b_king':
                    coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 },
                    { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    break;

                case 'w_queen':
                case 'b_queen':
                    c1 = main.methods.getRawOptions(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.getRawOptions(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.getRawOptions(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.getRawOptions(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.getRawOptions(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.getRawOptions(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.getRawOptions(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.getRawOptions(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                    break;

                case 'w_bishop':
                case 'b_bishop':
                    c1 = main.methods.getRawOptions(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.getRawOptions(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.getRawOptions(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.getRawOptions(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    break;

                case 'w_knight':
                case 'b_knight':
                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 },
                    { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    break;

                case 'w_rook':
                case 'b_rook':
                    c1 = main.methods.getRawOptions(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.getRawOptions(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.getRawOptions(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.getRawOptions(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);
                    coordinates = c1.concat(c2).concat(c3).concat(c4);
                    break;

                case 'w_pawn':
                    coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    break;

                case 'b_pawn':
                    coordinates = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                    break;
            }
            return coordinates.filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);
                return !(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8);
            });
        },

        getRawOptions: function (position, coordinates) {
            let flag = false;
            let color = main.variables.turn;

            return coordinates.map(function (val) {
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);
                return !(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8);
            }).filter(val => {
                if (flag === false) {
                    if ($('#' + val).attr('chess') === 'null') {
                        return val;
                    } else {
                        flag = true;
                        return val;
                    }
                }
            });
        },

        isInCheck: function (color) {
            let kingPos = main.methods.findKing(color);
            if (!kingPos) return false;
            let opponent = color === 'w' ? 'b' : 'w';
            return main.methods.isSquareUnderAttack(kingPos, opponent);
        },

        isCheckmate: function (color) {
            if (!main.methods.isInCheck(color)) {
                return false;
            }
            let pieces = [];
            for (let pieceName in main.variables.pieces) {
                let piece = main.variables.pieces[pieceName];
                if (!piece.captured && piece.type.slice(0, 1) === color) {
                    pieces.push(pieceName);
                }
            }
            for (let i = 0; i < pieces.length; i++) {
                let pieceName = pieces[i];
                let currentPos = main.variables.pieces[pieceName].position;
                let moves = main.methods.getLegalMovesForPiece(pieceName);
                for (let j = 0; j < moves.length; j++) {
                    let targetPos = moves[j];
                    let capturedPiece = $('#' + targetPos).attr('chess');
                    let originalPos = currentPos;
                    $('#' + targetPos).html(main.variables.pieces[pieceName].img);
                    $('#' + targetPos).attr('chess', pieceName);
                    $('#' + originalPos).html('');
                    $('#' + originalPos).attr('chess', 'null');
                    let oldPos = main.variables.pieces[pieceName].position;
                    main.variables.pieces[pieceName].position = targetPos;
                    if (capturedPiece && capturedPiece !== 'null') {
                        main.variables.pieces[capturedPiece].captured = true;
                    }
                    let stillInCheck = main.methods.isInCheck(color);
                    main.variables.pieces[pieceName].position = oldPos;
                    $('#' + originalPos).html(main.variables.pieces[pieceName].img);
                    $('#' + originalPos).attr('chess', pieceName);
                    $('#' + targetPos).html('');
                    $('#' + targetPos).attr('chess', 'null');
                    if (capturedPiece && capturedPiece !== 'null') {
                        main.variables.pieces[capturedPiece].captured = false;
                        $('#' + targetPos).html(main.variables.pieces[capturedPiece].img);
                        $('#' + targetPos).attr('chess', capturedPiece);
                    }
                    if (!stillInCheck) {
                        return false;
                    }
                }
            }
            return true;
        },
        getLegalMovesForPiece: function (pieceName) {
            let savedHighlighted = main.variables.highlighted.slice();
            let savedSelected = main.variables.selectedpiece;
            main.variables.selectedpiece = pieceName;
            main.methods.moveoptions(pieceName);
            let moves = main.variables.highlighted.slice();
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted = savedHighlighted;
            main.variables.selectedpiece = savedSelected;
            return moves;
        },

    }
};

$(document).ready(function () {
    main.methods.gamesetup();
    $('.cell').click(function (e) {

        var selectedpiece = {
            name: '',
            id: main.variables.selectedpiece
        };

        if (main.variables.selectedpiece == '') {
            selectedpiece.name = $('#' + e.target.id).attr('chess');
        } else {
            selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
        }

        var target = {
            name: $(this).attr('chess'),
            id: e.target.id
        };

        if (main.variables.selectedpiece == '' && target.name.slice(0, 1) == main.variables.turn) {
            main.variables.selectedpiece = e.target.id;
            main.methods.moveoptions($(this).attr('chess'));
        } else if (main.variables.selectedpiece != '' && target.name == 'null') {
            if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king') {
                let t0 = (selectedpiece.name == 'w_king');
                let t1 = (selectedpiece.name == 'b_king');
                let t2 = (main.variables.pieces[selectedpiece.name].moved == false);
                let t3 = (main.variables.pieces['b_rook2'].moved == false);
                let t4 = (main.variables.pieces['w_rook2'].moved == false);
                let t5 = (target.id == '7_8');
                let t6 = (target.id == '7_1');

                if (t0 && t2 && t4 && t6) {
                    let k_position = '5_1';
                    let k_target = '7_1';
                    let r_position = '8_1';
                    let r_target = '6_1';
                    main.variables.pieces['w_king'].position = '7_1';
                    main.variables.pieces['w_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['w_king'].img);
                    $('#' + k_target).attr('chess', 'w_king');
                    main.variables.pieces['w_rook2'].position = '6_1';
                    main.variables.pieces['w_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['w_rook2'].img);
                    $('#' + r_target).attr('chess', 'w_rook2');
                    main.methods.endturn();
                } else if (t1 && t2 && t3 && t5) {
                    let k_position = '5_8';
                    let k_target = '7_8';
                    let r_position = '8_8';
                    let r_target = '6_8';
                    main.variables.pieces['b_king'].position = '7_8';
                    main.variables.pieces['b_king'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('chess', 'null');
                    $('#' + k_target).html(main.variables.pieces['b_king'].img);
                    $('#' + k_target).attr('chess', 'b_king');

                    main.variables.pieces['b_rook2'].position = '6_8';
                    main.variables.pieces['b_rook2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('chess', 'null');
                    $('#' + r_target).html(main.variables.pieces['b_rook2'].img);
                    $('#' + r_target).attr('chess', 'b_rook2');
                    main.methods.endturn();
                } else {
                    main.methods.move(target);
                    main.methods.endturn();
                }
            } else {
                main.methods.move(target);
                main.methods.endturn();
            }
        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) != target.name.slice(0, 1)) {
            if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) {
                main.methods.capture(target)
                main.methods.endturn();
            }
        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) == target.name.slice(0, 1)) {
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            main.variables.selectedpiece = target.id;
            main.methods.moveoptions(target.name);
        }
    });
    $('body').contextmenu(function (e) {
        e.preventDefault();
    });

});